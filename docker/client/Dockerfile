FROM node:8.4.0

COPY . /andela_social

WORKDIR /andela_social

RUN npm uninstall node-sass -g

RUN npm install

COPY ./start-client.sh  /start-client.sh

RUN chmod +x /start-client.sh

ENTRYPOINT "/start-client.sh" && /bin/bash
