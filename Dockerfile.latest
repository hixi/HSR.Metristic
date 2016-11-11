FROM node:6-wheezy

RUN apt-get update && apt-get -y install git && apt-get clean all

RUN mkdir -p /usr/src/metristic
WORKDIR /usr/src/metristic


# Download and build source, remove dev environment & install production deps
RUN git clone --depth=1 https://github.com/wasabideveloper/HSR.Metristic.Core.git
WORKDIR /usr/src/metristic/HSR.Metristic.Core
RUN \
	npm install --no-optional --silent && \
	npm run typings install && \
	npm run gulp deploy && \
	npm link && \
	rm -rf node_modules && \
	npm install --no-optional --silent --production && \
	npm cache clean
WORKDIR /usr/src/metristic


RUN git clone --depth=1 https://github.com/wasabideveloper/HSR.Metristic.Plugin.General.git
WORKDIR /usr/src/metristic/HSR.Metristic.Plugin.General
RUN \
	npm link "metristic-core" && \
	npm install --no-optional --silent && \
	npm run typings install && \
	npm run gulp deploy && \
	npm link && \
	rm -rf node_modules && \
	npm link "metristic-core" && \
	npm install --no-optional --silent --production && \
	npm cache clean
WORKDIR /usr/src/metristic


RUN git clone --depth=1 https://github.com/wasabideveloper/HSR.Metristic.Plugin.Web.git
WORKDIR /usr/src/metristic/HSR.Metristic.Plugin.Web
RUN \
	npm link "metristic-core" && \
	npm install --no-optional --silent && \
	npm run typings install && \
	npm run gulp deploy && \
	npm link && \
	rm -rf node_modules && \
	npm link "metristic-core" && \
	npm install --no-optional --silent --production && \
	npm cache clean
WORKDIR /usr/src/metristic


RUN mkdir /usr/src/metristic/HSR.Metristic/
COPY . /usr/src/metristic/HSR.Metristic/
WORKDIR /usr/src/metristic/HSR.Metristic
RUN \
	npm link "metristic-core" && \
	npm link "metristic-plugin-general" && \
	npm link "metristic-plugin-web" && \
	npm install --no-optional --silent && \
	npm run typings install && \
	npm run gulp deploy && \
	npm link && \
	rm -rf node_modules && \
	npm link "metristic-core" && \
	npm link "metristic-plugin-general" && \
	npm link "metristic-plugin-web" && \
	npm install --no-optional --silent --production && \
	npm cache clean
WORKDIR /usr/src/metristic


CMD [ "node", "HSR.Metristic/app/index.js" ]
EXPOSE 8080