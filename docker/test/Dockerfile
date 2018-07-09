FROM node:carbon

LABEL MAINTAINER = "Natalie Elizabeth <natalie.elizabeth@andela.com"

LABEL application="andela-socials"

ENV TERM=xterm-256color

ENV CI=true

RUN apt-get -y update && apt-get -y install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

ADD scripts/setup.sh /usr/local/bin/setup.sh

ADD scripts/start.sh /usr/local/bin/start.sh

RUN chmod +x /usr/local/bin/setup.sh

RUN chmod +x /usr/local/bin/start.sh

COPY client /application/client

COPY package.json /application/package.json

COPY webpack.config.dev.js /application/webpack.config.dev.js

COPY cypress.json /application/cypress.json

WORKDIR /application

RUN npm install

CMD node_modules/.bin/cypress run


