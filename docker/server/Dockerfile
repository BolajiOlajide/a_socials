#set up python runtime environment
FROM python:3.6.2-slim
ENV PYTHONUNBUFFERED 1

 #Update pip version
RUN pip install --upgrade pip

# Load project files to new work directory
WORKDIR /andela_social
COPY . /andela_social

# Copy the requirements.txt to a tmp folder
COPY requirements.txt /tmp
RUN pip install -r /tmp/requirements.txt

# Expose this port outside of the container
EXPOSE 8000

# Copy setup scripts to folder
COPY ./start-server.sh /start-server.sh
COPY ./wait_for_database.sh /wait_for_database.sh

# Make the setup scripts executable
RUN chmod +x /start-server.sh
RUN chmod +x /wait_for_database.sh

#set the wait for database script as the entry
ENTRYPOINT "/wait_for_database.sh" && /bin/bash
