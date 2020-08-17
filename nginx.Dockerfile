FROM nginx:1.16.1-alpine

RUN apk add --no-cache bash
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/www

WORKDIR /var/www

EXPOSE 80