FROM python:3.5-alpine
ENV PYTHONUNBUFFERED 1

# Create API directory
RUN mkdir /api
WORKDIR /api

# Install dependencies
RUN apk update && apk add postgresql-dev gcc musl-dev
# Add requirements.txt file to container
ADD requirements.txt /api/

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Add the current directory to Docker container
ADD . /api/
