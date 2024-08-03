# Guide of instrumenting OTEL on WEB layer

WEB layer is run using [NGINX](https://nginx.org/en/) and its purpose is to provide the front end web layer composed of HTML pages, and javascript libraries to render and interfact with the user. WEB layer also acts as proxy for backend services, forwarding requests to Tier 1 service as necessary.

## Integration Strategy

NGINX has the ability to be configured with an opentelemetry module that can be downloaded and configured with it. Detailed instructions are found in opentelemetry's website [here](https://github.com/nginxinc/nginx-otel/blob/main/README.md).

## Instrumentation Steps

1. In the [nginx.conf](nginx.conf), add the following code which will load the `ngx_otel_module.so`, and configure it to start emitting traces on two http endpoints.

```
load_module modules/ngx_otel_module.so;
load_module modules/ngx_http_js_module.so;
events {}
http {
  otel_exporter {
    endpoint otel-collector:4317;
  }
  otel_trace on;
  otel_service_name web;

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
      otel_trace_context propagate;
      root /usr/share/nginx/html;
      index index.html index.htm;
    }

    location /proxy {
      otel_trace_context propagate;
      proxy_pass http://tier1:8080/;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
      root /usr/share/nginx/html;
    }
  }
}
```

* Note al the configurations that are prefixed with `otel_`. Those are the otel specific configurations.

These are the configuration options for enabling the module, setting the exporter protocol, and specifying otel-collector as the OTLP endpoint, and etc.

2. In the [Dockerfile](Dockerfile), add the following code right after the `FROM docker.io/library/nginx:1.26.1`

```
RUN apt-get update
RUN apt-get install -y curl gnupg2 ca-certificates lsb-release debian-archive-keyring
RUN curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/debian `lsb_release -cs` nginx" | tee /etc/apt/sources.list.d/nginx.list
RUN echo "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | tee /etc/apt/preferences.d/99nginx
RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get install -y nginx-module-otel
```

* The above script is necessary to register the nginx repo, and installing necessary nginx and nginx-module-otel to the container.
* Also, the module seems to have dependency with nginx:1.26.1

## What this would look like

![screenshot](web-trace-screenshot.png "screenshot")

You should see the service name `web` that bridges the trace between `waf` and `tier-service` calling `/proxy` and eventually calling `/slow` in tier1-service.

## Further readings

- [OpenTelemetry Concepts](https://opentelemetry.io/docs/concepts/) : Get yourself familiarized with various concepts of OpenTelemetry.