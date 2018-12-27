FROM node:10.15-alpine
# Create API directory
RUN mkdir /front
WORKDIR /front

ADD package.json /front/package.json

ENV NODE_PATH /node_modules
ENV PATH /node_modules/.bin:$PATH

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# Add the current directory to Docker container
ADD . /front
