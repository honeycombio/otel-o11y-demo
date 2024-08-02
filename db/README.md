# Guide of instrumenting OTEL on consumer - DB

We are using [MySQL](https://www.mysql.com/) as the choice of RDBMS containing rows of test data, which will be accessed by various services.

## Integration Strategy

OpenTelemetry has integration with MySQL database, which is done via the OpenTelemetry collector's [mysql receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/mysqlreceiver). The idea is that OpenTelemetry collector is going to be setup with mysql receiver, that will periodically connect to the database, scrape the necessary metrics (e.g. cpu, threads, query performance, memory usage, cache hit ratio, etc.), and export it into Honeycomb.

## Instrumentation Steps

1. In [otel-collector-config.yml](../otel-collector/otel-collector-config.yml), the following receiver called `mysql` will be added.

```
receivers:
...
  mysql:
    endpoint: db:3306
    username: root
    password: admin
    collection_interval: 60s
```

Also, in the metrics pipeline, the receiver `mysql` will be added:

```
service:

  pipelines:
...
    metrics:
      receivers: [otlp, mysql, rabbitmq, hostmetrics]
      processors: [resourcedetection, batch]
      exporters: [otlp/metrics]
```