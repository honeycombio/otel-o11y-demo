from flask import Flask, send_from_directory
from healthcheck import HealthCheck
import time
import requests
import random
import pika
import sys
import logging
from tenacity import retry, stop_after_attempt, wait_fixed

from opentelemetry import trace

tracer = trace.get_tracer("tier1-python")

APP = Flask(__name__)
health = HealthCheck()

QCREDS = pika.PlainCredentials("test","test")

@retry(stop=stop_after_attempt(60), wait=wait_fixed(10))
def establish_queue_connection():
    return pika.BlockingConnection(
        pika.ConnectionParameters(
            host="queue",
            credentials=QCREDS,
            heartbeat=600,
            blocked_connection_timeout=300,
            socket_timeout=10
        )
    )

log = logging.getLogger(__name__)

def is_healthy():
    return True, "tier1 ok"

health.add_check(is_healthy)

def logit(msg):
    """making sure we are printing out to stderr
    so log can be seen while running docker-compose"""
    # print(f"TIER1: {msg}", file=sys.stderr)
    log.warning(msg)

def go_slow_p():
    """return boolean on whether or something should go slow"""
    num = random.random()
    new_num = num * 100
    return new_num > 95

def pure_tier2_proc(text):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    return f"{text}-plus-pure-tier2-proc"

def do_tier2(error = None):
    """this is the main stuff of calling internal service tier2"""
    logit("this is some important log that is to help troubleshoot when an app goes bad")
    logit("calling tier1 function")
    url = "http://tier2:8080"
    if error is not None and error is True:
        url = url + "/error"
    resp = requests.get(url)
    return pure_tier2_proc(resp.text)

def do_tier2_fast():
    """call tier2 with no delay"""
    logit("called fast function")
    return f"{do_tier2()}"

def do_tier2_slow():
    """call tier2 with some delay"""
    logit("called slow function")
    time.sleep(1.5)
    return f"{do_tier2()}"

def do_error():
    """call tier2 with error condition"""
    logit("called error function")
    return f"{do_tier2(error = True)}"

def pure_queue_proc(ctx):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    return f"{ctx}-plus-pure-queue-proc"

@tracer.start_as_current_span("do_queue")
def do_queue(ctx):
    """this is the main function that will write to a queue that
    will be picked up by some consumer, like registering a new user"""
    logit(f"this is some important log that is used to gain insight to how well we are doing registering new members")
    logit(f"called queue function w/ {ctx}")
    time.sleep(1.5) if go_slow_p() else False

    QCONN = establish_queue_connection()
    QCHAN = QCONN.channel()
    QCHAN.queue_declare(queue="test")

    QCHAN.basic_publish(
        exchange="",
        routing_key="test",
        body=f"{ctx} {time.time()}"
    )

    QCONN.close()
    return f"do_queue"

@tracer.start_as_current_span("pure_saas_proc")
def pure_saas_proc(resp):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    resp["didsomethingpure"] = time.localtime()
    current_span = trace.get_current_span()
    current_span.set_attribute("app.didsomethingpure", str(resp["didsomethingpure"]))
    return resp

def do_saas(ctx):
    """this is the main function that shows us calling some external SaaS"""
    logit(f"this is some important log that is used to determine how much we are using this external SaaS")
    logit(f"called saas function w/ {ctx}")
    time.sleep(1.5) if go_slow_p() else False
    resp = requests.get("https://www.githubstatus.com/api/v2/summary.json")
    return pure_saas_proc(resp.json())

@APP.route("/fast")
def fast_route():
    """most likely fast route"""
    result = "tier 1 - fast"
    result = result + " → " + str(do_queue("fast"))
    result = result + " → " + "do_saas"
    do_saas("fast")
    result = result + " → " + str(do_tier2_fast())
    return result

@APP.route("/slow")
def slow_route():
    """for sure slow route"""
    result = "tier 1 - slow"
    result = result + " → " + str(do_queue("slow"))
    result = result + " → " + "do_saas"
    do_saas("slow")
    result = result + " → " + str(do_tier2_slow())
    return result

@APP.route("/error")
def error_route():
    """for error"""
    result = "tier 1 - error"
    result = result + " → " + str(do_queue("error"))
    result = result + " → " + "do_saas"
    do_saas("error")
    result = result + " → " + str(do_error())
    return result

IMAGE_DIRECTORY = 'images'
IMAGE_FILENAME = 'honeycomb.png'  # Change this to the name of your image file

@APP.route("/get-image", methods=['GET'])
def get_image():
    try:
        # delay a little 
        if random.random() < 0.25:
            time.sleep(random.randint(1, 3))
        return send_from_directory(IMAGE_DIRECTORY, IMAGE_FILENAME, as_attachment=False)
    except FileNotFoundError:
        return "Image not found.", 404

@APP.route("/random")
def random_route():
    """randomly fast or slow route"""
    if go_slow_p():
        do_queue("slow")
        do_saas("slow")
        result = do_tier2_slow()
    else:
        do_queue("fast")
        do_saas("fast")
        result = do_tier2_fast()
    return result

APP.add_url_rule("/healthcheck", "healthcheck", view_func=lambda: health.run())
