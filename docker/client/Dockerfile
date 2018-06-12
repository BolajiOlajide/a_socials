FROM node:8.4.0

#Copy root directory into andela_social directory
COPY . /andela_social

# Set andela_social as working directory
WORKDIR /andela_social

# uninstall node sass to remove any previous version
RUN npm uninstall node-sass -g

# Install the dependencies from package json
RUN npm install

# Copy start-client.sh scripts
COPY ./start-client.sh  /start-client.sh

# Make the start-client script executable
RUN chmod +x /start-client.sh

# Set the start script as the entrypoint
ENTRYPOINT "/start-client.sh" && /bin/bash
