from flask import Flask
import time
import sys
import logging
from mysql.connector import connect

APP = Flask(__name__)

DB = connect(host="db",
             user="test",
             password="test",
             db="test",
            )

log = logging.getLogger(__name__)

def logit(msg):
    """making sure we are printing out to stderr
    so log can be seen while running docker-compose"""
    # print(f"TIER2: {msg}", file=sys.stderr)
    log.warning(msg)

def pure_db_proc(rows):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    return rows + ["some other thing"]

def query_db():
    """this is some imperative shell that is calling some DB and then
    is being processed by some pure function that returning that"""
    logit(f"this is some important log that is used to udpate product owners that a event was successful")
    logit("queried DB")
    result = []
    with DB.cursor() as cursor:
        cursor.execute("SELECT * FROM test")
        result = cursor.fetchall()
    return pure_db_proc(result)

@APP.route("/")
def default():
    """root route"""
    query_db()
    return f"tier 2 {time.time()}"
