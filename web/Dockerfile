FROM docker.io/library/nginx:1.26.1
RUN apt-get update
RUN apt-get install -y curl gnupg2 ca-certificates lsb-release debian-archive-keyring
RUN curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/debian `lsb_release -cs` nginx" | tee /etc/apt/sources.list.d/nginx.list
RUN echo "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | tee /etc/apt/preferences.d/99nginx
RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get install -y nginx-module-otel
RUN apt-get install -y nginx-module-njs
COPY static/index.html /usr/share/nginx/html/index.html
COPY static/poor.html /usr/share/nginx/html/poor.html
COPY static/index.js /usr/share/nginx/html/index.js
COPY static/otelweb.js /usr/share/nginx/html/otelweb.js
COPY static/loading-meme.gif /usr/share/nginx/html/loading-meme.gif
COPY static/otel-o11y-demo.png /usr/share/nginx/html/otel-o11y-demo.png
COPY nginx.conf /etc/nginx/nginx.conf
COPY static/http_js.js /etc/nginx/http_js.js