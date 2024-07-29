from flask import Flask
from healthcheck import HealthCheck
import time
import requests
import random
import pika
import sys
import logging

APP = Flask(__name__)
health = HealthCheck()

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
    resp = requests.get("http://tier2:8080")
    return pure_tier2_proc(resp.text)

def do_tier2_fast():
    """call tier2 with no delay"""
    logit("called fast function")
    return f"tier 1 fast :: {do_tier2()}"

def do_tier2_slow():
    """call tier2 with some delay"""
    logit("called slow function")
    time.sleep(1.5)
    return f"tier 1 slow :: {do_tier2()}"

def do_error():
    """call tier2 with error condition"""
    logit("called error function")
    return f"tier 2 error :: {do_tier2(error = True)}"

def pure_queue_proc(ctx):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    return f"{ctx}-plus-pure-queue-proc"

def do_queue(ctx):
    """this is the main function that will write to a queue that
    will be picked up by some consumer, like registering a new user"""
    logit(f"this is some important log that is used to gain insight to how well we are doing registering new members")
    logit(f"called queue function w/ {ctx}")
    time.sleep(1.5) if go_slow_p() else False
    QCHAN.basic_publish(
        exchange="",
        routing_key="test",
        body=f"{ctx} {time.time()}"
    )

def pure_saas_proc(resp):
    """this is attempting to show use of a pure function that
    should not be polluted with side effects"""
    resp["didsomethingpure"] = time.localtime()
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
    do_queue("fast")
    do_saas("fast")
    result = do_tier2_fast()
    return result

@APP.route("/slow")
def slow_route():
    """for sure slow route"""
    do_queue("slow")
    do_saas("slow")
    result = do_tier2_slow()
    return result

@APP.route("/error")
def error_route():
    """for error"""
    do_queue("error")
    do_saas("error")
    result = do_error()
    return result

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
