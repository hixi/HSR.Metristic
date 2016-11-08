FROM node:6-wheezy

# TODO: Test when releases available

RUN apt-get update
RUN apt-get -y install unzip git

RUN mkdir -p /usr/src/metristic
RUN mkdir -p /usr/src/metristic/app
WORKDIR /usr/src/metristic

# RUN wget https://github.com/wasabideveloper/HSR.Metristic.Core/releases/download/0.3/HSR.Metristic.Core-0.3.zip
# RUN wget https://drive.switch.ch/index.php/s/mWSD7LMFENUnB29/download --output-document=HSR.Metristic.Core-0.3.zip
# RUN unzip "HSR.Metristic.Core-0.3.zip"
# RUN (cd "HSR.Metristic.Core-0.3"; npm install --production; npm link)
RUN git clone -b develop https://github.com/wasabideveloper/HSR.Metristic.Core.git
RUN (cd "HSR.Metristic.Core"; npm install --no-optional --silent; npm run typings install; npm run gulp deploy; npm link)

# RUN wget https://github.com/wasabideveloper/HSR.Metristic.Plugin-General/releases/download/0.3/HSR.Metristic.Plugin.General-0.3.zip
# RUN wget https://drive.switch.ch/index.php/s/6F9ob8JAZUxI2RL/download --output-document=HSR.Metristic.Plugin.General-0.3.zip
# RUN unzip "HSR.Metristic.Plugin.General-0.3.zip"
# RUN (cd "HSR.Metristic.Plugin.General-0.3"; npm link "metristic-core"; npm install --production; npm link)
RUN git clone -b develop https://github.com/wasabideveloper/HSR.Metristic.Plugin.General.git
RUN (cd "HSR.Metristic.Plugin.General"; npm link "metristic-core"; npm install gulp typescript typings --silent; npm install --no-optional --silent; typings install; gulp deploy; npm link)

# RUN wget https://github.com/wasabideveloper/HSR.Metristic.Core/releases/download/0.3/HSR.Metristic.Plugin.Web-0.3.zip
# RUN wget https://drive.switch.ch/index.php/s/y0Cy2DwcnisbmQv/download --output-document=HSR.Metristic.Plugin.Web-0.3.zip
# RUN unzip "HSR.Metristic.Plugin.Web-0.3.zip"
# RUN (cd "HSR.Metristic.Plugin.Web-0.3"; npm link "metristic-core"; npm install --production; npm link)
RUN git clone -b develop https://github.com/wasabideveloper/HSR.Metristic.Plugin.Web.git
RUN (cd "HSR.Metristic.Plugin.Web"; npm link "metristic-core"; npm install gulp typescript typings --silent; npm install --no-optional --silent; typings install; gulp deploy; npm link)

# RUN wget https://github.com/wasabideveloper/HSR.Metristic/releases/download/0.3/HSR.Metristic-0.3.zip
# RUN wget https://drive.switch.ch/index.php/s/t0QIjDZOwHofjB4/download --output-document=HSR.Metristic-0.3.zip
# RUN unzip "HSR.Metristic-0.3.zip"
# RUN (cd "HSR.Metristic-0.3"; npm link "metristic-core"; npm link "metristic-plugin-general"; npm link
# "metristic-plugin-web"; npm link npm install --production)
RUN git clone -b develop https://github.com/wasabideveloper/HSR.Metristic.git
RUN (cd "HSR.Metristic"; npm link "metristic-core"; npm link "metristic-plugin-general"; npm link "metristic-plugin-web"; npm install gulp typescript typings --silent; npm install --no-optional --silent; typings install; gulp deploy; npm link)

CMD [ "node", "HSR.Metristic/app/index.js" ]

EXPOSE 8080