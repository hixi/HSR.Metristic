FROM node:6-wheezy

// TODO: Test when releases available

RUN mkdir -p /usr/src/metristic
RUN mkdir -p /usr/src/metristic/app
WORKDIR /usr/src/metristic

RUN wget https://github.com/wasabideveloper/HSR.Metristic.Core/releases/download/0.3/Metristic-Core-Alpha3.zip
RUN unzip Metristic-Core-Alpha3.zip
RUN (cd Metristic-Core-Alpha3; npm install --production; npm link)

RUN wget https://github.com/wasabideveloper/HSR.Metristic.Plugin-General/releases/download/0.3/Metristic-Plugin-General-Alpha3.zip
RUN unzip Metristic-lugin-General-Alpha3.zip
RUN (cd Metristic-Plugin-General-Alpha3; npm link "metristic-core"; npm install --production; npm link)

RUN wget https://github.com/wasabideveloper/HSR.Metristic.Core/releases/download/0.3/Metristic-Plugin-Web-Alpha3.zip
RUN unzip Metristic-Plugin-Web-Alpha3.zip
RUN (cd Metristic-Plugin-Web-Alpha3; npm link "metristic-core"; npm install --production; npm link)

RUN wget https://github.com/wasabideveloper/HSR.Metristic/releases/download/0.3/Metristic-Alpha3.zip
RUN unzip Metristic-Alpha3.zip
RUN (cd Metristic-Alpha3; npm link "metristic-core"; npm link "metristic-plugin-general; npm link "metristic-plugin-web"; npm link npm install --production)

CMD [ "node", "Metristic-Alpha3/app/index.js" ]

EXPOSE 8080