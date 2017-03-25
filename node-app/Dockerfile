FROM node:alpine

EXPOSE 8080

ENV PORT 8080
ENV NODE_ENV production

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production --quiet && mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app

ADD . /opt/app

CMD node index.js
