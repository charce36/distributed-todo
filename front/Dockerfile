FROM node:10.15-alpine

# Create app directory
RUN mkdir -p /front
WORKDIR /front

COPY package.json /front/

RUN npm install
RUN npm install react-scripts@1.1.1 -g --silent
ADD . /front
