#set up python runtime environment
FROM python:3.6.2-slim
ENV PYTHONUNBUFFERED 1

# Setup Debian linux
#RUN export DEBIAN_FRONTEND=noninteractive
#RUN apt-get update && apt-get -y install build-essential curl
#RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
#RUN apt-get install -y nodejs
#RUN nodejs -v && npm -v
#RUN npm rebuild node-sass

 #Update pip version
RUN pip install --upgrade pip

# Load project files to new work directory
WORKDIR /andela_social
COPY . /andela_social

# Copy the requirements.txt to a tmp folder
COPY requirements.txt /tmp
RUN pip install -r /tmp/requirements.txt

EXPOSE 8000

# Copy setup scripts to folder
COPY ./start-server.sh /start-server.sh
COPY ./wait_for_database.sh /wait_for_database.sh

RUN chmod +x /start-server.sh
RUN chmod +x /wait_for_database.sh

ENTRYPOINT "/wait_for_database.sh" && /bin/bash



