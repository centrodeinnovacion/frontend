FROM nginx

EXPOSE 80
EXPOSE 443

COPY default.conf /etc/nginx/conf.d/
COPY ./dist/ /usr/share/nginx/html