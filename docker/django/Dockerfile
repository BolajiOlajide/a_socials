#set up python runtime environment
FROM python:3.6.2
ENV PYTHONUNBUFFERED 1

# Setup Debian linux
RUN export DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get -y install build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN nodejs -v && npm -v

 #Update pip version
RUN pip install --upgrade pip

COPY package.json /andela_social/

# Load project files to new work directory
WORKDIR /andela_social
COPY . /andela_social
#Copy package.json to working directory


# Copy the requirements.txt to a tmp folder
COPY requirements.txt /tmp
RUN pip install -r /tmp/requirements.txt

EXPOSE 8000

# Copy setup scripts to folder
COPY ./setup-dev.sh /setup-dev.sh
COPY ./wait_for_database.sh /wait_for_database.sh

RUN chmod +x /setup-dev.sh
RUN chmod +x /wait_for_database.sh



