FROM docker.io/library/python:3.11.7-slim AS base

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt
RUN opentelemetry-bootstrap --action=install
COPY app.py .

CMD opentelemetry-instrument \
    python3 /app/app.py
