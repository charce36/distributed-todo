FROM python:3.5.2
ENV PYTHONUNBUFFERED 1

# Create API directory
RUN mkdir /api
WORKDIR /api

# Add requirements.txt file to container
ADD requirements.txt /api/

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Add the current directory to Docker container
ADD . /api/
