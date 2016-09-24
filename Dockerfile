FROM node:6-wheezy

RUN mkdir -p /usr/src/metristic
RUN mkdir -p /usr/src/metristic/app
WORKDIR /usr/src/metristic

COPY package.json /usr/src/metristic
COPY ./dist/app /usr/src/metristic/app
RUN npm install --production

CMD [ "node", "app/index.js" ]

EXPOSE 8080