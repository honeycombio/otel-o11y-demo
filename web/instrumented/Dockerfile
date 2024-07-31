FROM docker.io/library/nginx:1.24.0

RUN apt-get update ; apt-get install unzip
ADD https://github.com/open-telemetry/opentelemetry-cpp-contrib/releases/download/webserver%2Fv1.0.4/opentelemetry-webserver-sdk-x64-linux.tgz /opt
RUN cd /opt ; unzip -o opentelemetry-webserver-sdk-x64-linux.tgz; tar xvf opentelemetry-webserver-sdk-x64-linux.tgz
RUN cd /opt/opentelemetry-webserver-sdk; ./install.sh
ENV LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/opentelemetry-webserver-sdk/sdk_lib/lib
COPY opentelemetry_module.conf /etc/nginx/conf.d
COPY static/headers.js /etc/nginx/headers.js
COPY static/index.html /usr/share/nginx/html/index.html
COPY static/index.js /usr/share/nginx/html/index.js
COPY static/loading-meme.gif /usr/share/nginx/html/loading-meme.gif
COPY static/otel-o11y-demo.png /usr/share/nginx/html/otel-o11y-demo.png
COPY nginx.conf /etc/nginx/nginx.conf
