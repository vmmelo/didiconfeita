FROM node:10.17.0-alpine

RUN apk add --no-cache bash

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

RUN rm package-lock.json

CMD [ "npm", "run", "build"]
