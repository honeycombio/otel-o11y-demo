import time
import random
import pika
import sys
import functools
from mysql.connector import connect
import logging

QCREDS = pika.PlainCredentials("test","test")
QCONN = pika.BlockingConnection(
    pika.ConnectionParameters(
        host="queue",
        credentials=QCREDS,
        heartbeat=600,
        blocked_connection_timeout=300,
    )
  )
QCHAN = QCONN.channel()
QCHAN.queue_declare(queue="test")
QCHAN.basic_qos(prefetch_count=1)

DB = connect(host="db",
             user="test",
             password="test",
             db="test",
            )

log = logging.getLogger(__name__)

def logit(msg):
    """making sure we are printing out to stderr
    so log can be seen while running docker-compose"""
    # print(f"CONSQUE: {msg}", file=sys.stderr)
    log.warning(msg)

def go_slow_p():
    """return boolean on whether or something should go slow"""
    num = random.random()
    new_num = num * 100
    return new_num > 95

def pure_db_proc(rows):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    return rows + ["some other thing"]

def query_db():
    """this is some imperative shell that is calling some DB and then
    is being processed by some pure function that returning that"""
    logit(f"this is just to note i have done something against the DB")
    logit("queried DB")
    result = []
    with DB.cursor() as cursor:
        cursor.execute("SELECT * FROM test")
        result = cursor.fetchall()
    return pure_db_proc(result)

def pure_message_proc(body):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    return f"{body}-plus-some-message-proc"

def on_message(chan, method_frame, header_frame, body, userdata=None):
    """this is the main function that will handle queue messages
    and do some business logic on it"""
    logit(f"this is an event log just to show something important was processed")
    time.sleep(1.5) if go_slow_p() else False
    chan.basic_ack(delivery_tag=method_frame.delivery_tag)
    query_db()
    return pure_message_proc(body)

def cons_queue():
    """this is the main function that hooks up the queue and passes off
    to the handler any messages received"""
    logit(f"called consumer setup queue function")
    on_message_callback = functools.partial(
         on_message,
         userdata="on_message_userdata"
    )
    QCHAN.basic_consume("test", on_message_callback)
    try:
        QCHAN.start_consuming()
    except KeyboardInterrupt:
        QCHAN.stop_consuming()
    logit(f"ending consumer setup queue function")
    QCONN.close()

cons_queue()
