# ubuntu 20.04 base image for Node
FROM ubuntu:20.04

# Setting up the work dir
WORKDIR /opt/frontend

# Updating the Docker image and Installing curl command
RUN apt-get update && \
    apt-get install curl -y

# Installation of Node
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt -y install nodejs

# Copying the frontend code into /opt/frontend
COPY . /opt/frontend

# Installing the node apps
RUN npm install

# Starting the application when container will start
CMD ["npm", "start"]
