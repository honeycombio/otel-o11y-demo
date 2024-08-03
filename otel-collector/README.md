# Guide of Configuring OpenTelemetry Collector

At first, the opentelemetry collector will not have exporters sending telemetry to Honeycomb, but just a logging exporter outputing data into console output.

## Integration Strategy

We will be needing to setup OpenTelemetry collector for metrics, traces, and logs to be sent to Honeycomb.

## Instrumentation Steps

1. Modify the [otel-collector-config.yml](otel-collector-config.yml) as follows:

```
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
---
# Based on the default config found here:
# https://github.com/open-telemetry/opentelemetry-collector-releases/blob/main/configs/otelcol-contrib.yaml

receivers:
  otlp:
    protocols:
      http:
        endpoint: 0.0.0.0:4318
      grpc:
        endpoint: 0.0.0.0:4317
  hostmetrics:
    collection_interval: 60s
    scrapers:
      cpu: {}
      disk: {}
      load: {}
      filesystem: {}
      memory: {}
      network: {}
      paging: {}
      processes: {}

processors:
  batch:
  resourcedetection:
    detectors: [env, system] # include ec2 for AWS, gcp for GCP and azure for Azure.
    # Using OTEL_RESOURCE_ATTRIBUTES envvar, env detector adds custom labels.
    timeout: 2s
    override: false
    system:
      hostname_sources: [os]

exporters:
  logging:
    verbosity: detailed
  otlp/logs:
    endpoint: api.honeycomb.io:443
    headers:
      x-honeycomb-team: ${env:HONEYCOMB_API_KEY}
      x-honeycomb-dataset: logs
  otlp/traces:
    endpoint: api.honeycomb.io:443
    headers:
      x-honeycomb-team: ${env:HONEYCOMB_API_KEY}
  otlp/metrics:
    endpoint: api.honeycomb.io:443
    headers:
      x-honeycomb-dataset: metrics
      x-honeycomb-team: ${env:HONEYCOMB_API_KEY}

service:

  pipelines:

    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlp/logs, logging]

    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlp/traces, logging]

    metrics:
      receivers: [otlp, hostmetrics]
      processors: [resourcedetection, batch]
      exporters: [otlp/metrics, logging]

```

Which adds the three pipelines per telemetry types (metrics, logs, traces). Also, for metrics, hostmetrics receiver was added to collect operating system's performance metrics (e.g. CPU, memory, processor, etc.).

2. Add the following into [docker-compose.yaml](../docker-compose.yaml) so that OpenTelemetry collector would be a part of the docker compose.

```
  otel-collector:
    image: otel/opentelemetry-collector-contrib:0.70.0
    labels:
      description: "OpenTelemetry collector"
    container_name: "otel-collector"
    command: [--config=/etc/otel-collector-config.yml]
    environment:
      HONEYCOMB_API_KEY: ${HONEYCOMB_API_KEY}
    volumes:
      - ./otel-collector/otel-collector-config.yml:/etc/otel-collector-config.yml
    ports:
      - 24317:4317    # OTLP grpc receiver
      - 24318:4318    # OTLP http receiver
      - 54526:54526   # rsyslog
    depends_on:
      db:
        condition: service_healthy
      queue:
        condition: service_healthy
```

3. Modify the [.env](../.env) file, by replacing `your-api-key` with the valid API key for your Honeycomb.

```
HONEYCOMB_API_KEY="your-api-key"
```

refer to [Honeycomb doc](https://docs.honeycomb.io/get-started/configure/environments/manage-api-keys/) for more information related to managing and getting your API key.