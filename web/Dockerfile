FROM docker.io/library/nginx:1.24.0

RUN apt-get update ; apt-get install unzip
ADD https://github.com/open-telemetry/opentelemetry-cpp-contrib/releases/download/webserver%2Fv1.0.4/opentelemetry-webserver-sdk-x64-linux.tgz /opt
RUN cd /opt ; unzip -o opentelemetry-webserver-sdk-x64-linux.tgz; tar xvf opentelemetry-webserver-sdk-x64-linux.tgz
RUN cd /opt/opentelemetry-webserver-sdk; ./install.sh
ENV LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/opentelemetry-webserver-sdk/sdk_lib/lib
COPY opentelemetry_module.conf /etc/nginx/conf.d
COPY headers.js /etc/nginx/headers.js
COPY nginx.conf /etc/nginx/nginx.conf
