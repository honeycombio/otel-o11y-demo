FROM docker.io/library/nginx:1.26.1

COPY static/headers.js /etc/nginx/headers.js
COPY static/index.html /usr/share/nginx/html/index.html
COPY static/index.js /usr/share/nginx/html/index.js
COPY static/loading-meme.gif /usr/share/nginx/html/loading-meme.gif
COPY static/otel-o11y-demo.png /usr/share/nginx/html/otel-o11y-demo.png
COPY nginx.conf /etc/nginx/nginx.conf
