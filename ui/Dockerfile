FROM node:14.2.0-alpine3.10

LABEL maintainer="bardin.petr@gmail.com"
LABEL version="0.1"

RUN mkdir /app
WORKDIR /app

ADD package.json .

RUN npm install

COPY ./ ./

ENTRYPOINT ["node", "index.js"]

