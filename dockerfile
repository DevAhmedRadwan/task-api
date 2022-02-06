# Using official node runtime base image
FROM node:14-alpine

# Set the application directory
WORKDIR /api

# Copy package.json
COPY package.json package.json

# Install dependancies
RUN npm i

# Copy our code from the current folder to /app inside the container
COPY . .

# Define our command to be run when launching the container
CMD ["npm", "run", "dev"]