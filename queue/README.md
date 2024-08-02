# Guide of instrumenting OTEL on consumer - MQ

We are using [RabbitMQ](https://www.rabbitmq.com/) as the choice of Message Queue passing messages between Tier1 service and Consumer service.

## Integration Strategy

OpenTelemetry has integration with RabbitMQ, which is done via the OpenTelemetry collector's [rabbitMQ receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/rabbitmqreceiver). The idea is that OpenTelemetry collector is going to be setup with rabbitMQ receiver, that will periodically connect to the rabbitMQ, scrape the necessary metrics (e.g. cpu, threads, query performance, memory usage, cache hit ratio, etc.), and export it into Honeycomb.

## Instrumentation Steps

1. In [otel-collector-config.yml](../otel-collector/otel-collector-config.yml), the following receiver called `mysql` will be added.

```
receivers:
...
  rabbitmq:
    endpoint: http://queue:15672
    username: test
    password: test
    collection_interval: 60s
```

Also, in the metrics pipeline, the receiver `rabbitmq` will be added:

```
service:

  pipelines:
...
    metrics:
      receivers: [otlp, mysql, rabbitmq, hostmetrics]
      processors: [resourcedetection, batch]
      exporters: [otlp/metrics]
```