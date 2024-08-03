FROM docker.io/library/python:3.11.7-slim AS base

WORKDIR /app

COPY requirements.txt .

RUN apt-get -y update; apt-get -y install curl
RUN pip3 install -r requirements.txt
COPY app.py .

EXPOSE 8080

CMD opentelemetry-instrument \
    flask --app app run -p 8080 -h 0.0.0.0
