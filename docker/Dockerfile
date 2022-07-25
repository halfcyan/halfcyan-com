FROM node:18-alpine

RUN apk add --no-cache python3 make g++ && \
    apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
    rm -fR /var/cache/apk/*

WORKDIR /usr/src

USER root

COPY ./package.json package.json

RUN npm install

EXPOSE 8000