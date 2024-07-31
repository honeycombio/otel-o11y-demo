# Guide of instrumenting OTEL on WEB layer

WEB layer is run using [NGINX](https://nginx.org/en/) and its purpose is to provide the front end web layer composed of HTML pages, and javascript libraries to render and interfact with the user. WEB layer also acts as proxy for backend services, forwarding requests to Tier 1 service as necessary.

## Integration Strategy

NGINX has the ability to be configured with an opentelemetry module that can be downloaded and configured with it. Detailed instructions are found in opentelemetry's website [here](https://opentelemetry.io/blog/2022/instrument-nginx/).

## Instrumentation Steps

1. Create a file named `opentelemetry_module.conf` and add the following:

```
NginxModuleEnabled ON;
NginxModuleOtelSpanExporter otlp;
NginxModuleOtelExporterEndpoint otel-collector:4317;
NginxModuleServiceName web;
NginxModuleServiceNamespace web;
NginxModuleServiceInstanceId WebInstanceId;
NginxModuleResolveBackends ON;
NginxModuleTraceAsError ON;
```
These are the configuration options for enabling the module, setting the exporter protocol, and specifying otel-collector as the OTLP endpoint, and other 

2. In the [Dockerfile](Dockerfile), add the following code right after the `FROM docker.io/library/nginx:1.24.0`

```
RUN apt-get update ; apt-get install unzip
ADD https://github.com/open-telemetry/opentelemetry-cpp-contrib/releases/download/webserver%2Fv1.0.4/opentelemetry-webserver-sdk-x64-linux.tgz /opt
RUN cd /opt ; unzip -o opentelemetry-webserver-sdk-x64-linux.tgz; tar xvf opentelemetry-webserver-sdk-x64-linux.tgz
RUN cd /opt/opentelemetry-webserver-sdk; ./install.sh
ENV LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/opentelemetry-webserver-sdk/sdk_lib/lib
COPY opentelemetry_module.conf /etc/nginx/conf.d
```
3. Modify the [nginx.conf](nginx.conf) file, update as follows:

```
load_module /opt/opentelemetry-webserver-sdk/WebServerModule/Nginx/1.24.0/ngx_http_opentelemetry_module.so;
load_module modules/ngx_http_js_module.so;
events {}
http {
  include /etc/nginx/conf.d/opentelemetry_module.conf;
  js_import headers.js;
  js_set $headers_json headers.headers_json;
  log_format main '$remote_addr'
                  '\t$remote_user'
                  '\t$time_local'
                  '\t$request'
                  '\t$status'
                  '\t$headers_json';
  include       mime.types;
  default_type  application/octet-stream;

  server {
    listen 80;
    listen [::]:80;
    server_name localhost;
    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log;

    location / {
      root /usr/share/nginx/html;
      index index.html index.htm;
    }

    location /proxy {
      proxy_pass http://tier1:8080/;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
      root /usr/share/nginx/html;
    }
  }
}
```

The completed instrumentation files can be referred in [instrumented](./instrumented) folder.

### What this would look like

The out of box spans would have multiple nginx modules that were used during a typical web request, that would be consisted of multiple spans.

![screenshot](web-trace-screenshot.png "screenshot")

Sometimes, these would be noisy and unnecessary since they introduce too many spans without too much value. In that case, you can use OpenTelemetry Collector that is receiving these spans and filter them, so that they will not be sent to the Honeycomb backend.
