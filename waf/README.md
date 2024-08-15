# Guide of instrumenting OTEL on WAF (Web Application Firewall)

We are using [HAProxy](https://www.haproxy.org/) as the choice of WAF which will act as the firewall/loadbalancer in front of the WEB layer.

## Integration Strategy

HAProxy does not provide any OpenTelemetry related integrations, so we have to approach this differently. Basically, by configuring how the logging format can be modified, we are going to configure HAProxy to produce a JSON formatted log containing attributes necessary for the OpenTelemetry to parse, and modify to use it as trace event.

There is no support of OTLP in HAProxy. However, it can send logs via syslog according to [rfc3164](https://datatracker.ietf.org/doc/html/rfc3164) protocol, which OpenTelemetry collector is capable of receiving the data from. OpenTelemetry collector is then responsible for parsing and converting the data into the appropriate event format, using the series of [log operators](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/pkg/stanza/docs/operators).

## Instrumentation Steps

1. In [haproxy.cfg](haproxy.cfg), add the opentelemetry collector's syslog port as the log's target syslog endpoint.

```
receivers:
...
global
  maxconn 256
  log otel-collector:54526 local0
```

Also, under the `frontend waf` section, add the following that creates log message format that is going to be used by OpenTelemetry collector to parse and convert it into appropriate trace event.

```
frontend waf
  bind :8080

  # The fields to log:
  # ci = client IP
  # cp = client port
  # Ts = timestamp
  # ft = frontend name
  # b = backend name
  # s = server name
  # TR = time to receive 1st byte
  # Tw = time spent waiting in queue
  # Tc = time spent to establish server connection
  # Tr = server response time
  # Ta = total active time of request
  # ST = status code
  # B = bytes read
  # CC = captured request cookie
  # CS = captured response cookie
  # ts = termination state code
  # ac = active connections
  # fc = frontend connections
  # bc = backend connections
  # sc = server connections
  # rc = number of retries
  # sq = connections queued for server
  # bq = requests processed before this one
  # capture.req.method = HTTP method
  # capture.req.hdr(0) = User-Agent
  # scheme://URL

  http-request set-header X-Scheme http
  http-request set-header X-Scheme https if { ssl_fc }

  declare capture request len 512
  http-request capture req.fhdr(User-Agent) id 0
  declare capture request len 5
  http-request capture req.hdr(X-Scheme) id 1
  declare capture request len 512
  http-request capture req.hdr(Host) id 2

  http-request set-var(txn.trace_id) uuid(4),regsub(\"^([^-]{8})-([^-]{4})-([^-]{4})-([^-]{4})-([^-]{12})$\",\"\1\2\3\4\5\")
  http-request set-var(txn.parent_id) uuid(4),regsub(\"^([^-]{8})-([^-]{4})-([^-]{4})-([^-]{4})-([^-]{12})$\",\"\1\2\3\")
  unique-id-format 00-%[var(txn.trace_id)]-%[var(txn.parent_id)]-01
  http-request set-header traceparent %[unique-id] if !{ req.hdr(traceparent) }

  # log-format "%ci|%cp|%Ts|%ft|%b|%s|%TR|%Tw|%Tc|%Tr|%Ta|%ST|%B|%CC|%CS|%ts|%ac|%fc|%bc|%sc|%rc|%sq|%bq|%[capture.req.method]|%[capture.req.hdr(0)]|%[capture.req.hdr(1)]://%[capture.req.hdr(2)]%HP|%ID|%[capture.res.hdr(0)]"
  log-format "{\"appname\":\"haproxy\", \"service.name\":\"%ft\", \"trace.trace_id\":\"%[var(txn.trace_id)]\", \"trace.span_id\":\"%[var(txn.parent_id)]\", \"client_ip\":\"%ci\", \"client_port\":%cp, \"request_date_time\":\"%tr\", \"frontend\":\"%ft\", \"backend\":\"%b\", \"servername\":\"%s\", \"first_byte_time\":%TR, \"queue_wait_time\":%Tw, \"server_conn_time\":%Tc, \"server_response_time\":%Tr, \"total_request_time\":%Ta, \"status_code\":%ST, \"bytes_read\":%B, \"req_method\":\"%[capture.req.method]\", \"user_agent\":\"%[capture.req.hdr(0)]\", \"req_url\":\"%[capture.req.hdr(1)]://%[capture.req.hdr(2)]%HP\", \"traceparent\":\"%ID\"}"

  default_backend web
```

2. In the [otel-collector-config.yml](../otel-collector/otel-collector-config.yml), add the following syslog receiver for receiving the syslog data and parsing the data accordingly. Operators are processed in the order that is configured.

```
syslog/waf:
    udp:
      listen_address: "0.0.0.0:54526"
    protocol: rfc3164
    operators:
    - type: json_parser
      parse_from: attributes.message
      if: 'attributes.message matches "^{.*}$"'
    - type: add
      field: attributes.meta.signal_type
      value: trace
      if: 'attributes.message matches "^{.*}$"'
    - type: add
      field: attributes.meta.annotation_type
      value: trace
      if: 'attributes.message matches "^{.*}$"'
    - type: add
      field: attributes.span.kind
      value: server
      if: 'attributes.message matches "^{.*}$"'
    - type: add
      field: attributes.type
      value: server
      if: 'attributes.message matches "^{.*}$"'
    - type: time_parser
      parse_from: attributes.request_date_time
      layout_type: strptime
      layout: "%d/%b/%Y:%H:%M:%S.%f"
      if: 'attributes.message matches "^{.*}$"'
    - type: add
      field: attributes.name
      value: EXPR(attributes.appname)
      if: 'attributes.message matches "^{.*}$"'
    - type: add
      field: attributes.duration_ms
      value: EXPR(attributes.total_request_time)
      if: 'attributes.message matches "^{.*}$"'
```

And in the exporters, add `otlp/waf` section for exporting the data on `waf` dataset.

```
exporters:
  logging:
    verbosity: detailed
  otlp/waf:
    endpoint: api.honeycomb.io:443
    headers:
      x-honeycomb-team: ${env:HONEYCOMB_API_KEY}
      x-honeycomb-dataset: waf
```

Finally, in the services and pipeline section, add the logs/waf which uses `syslog/waf` receiver, and `otlp/waf` exporter.

```
service:

  pipelines:

    logs/waf:
      receivers: [syslog/waf]
      processors: [batch]
      exporters: [otlp/waf, logging]
```
