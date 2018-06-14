FROM node:8.4.0

# uninstall node sass to remove any previous version
RUN npm uninstall node-sass -g

#Copy root directory into andela_social directory
COPY . /andela_social

# Set andela_social as working directory
WORKDIR /andela_social

# Copy package json to working directory
COPY ./package.json .

# Install the dependencies from package json
RUN npm install

# Copy start-client.sh scripts
COPY docker/client/start-client.sh  /start-client.sh

# Make the start-client script executable
RUN chmod +x /start-client.sh

# Set the start script as the entrypoint
ENTRYPOINT "/start-client.sh" && /bin/bash
