# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json /usr/src/app

# Install dependencies
RUN npm install
RUN npm i --save-dev @types/mysql
RUN npm install --save @opentelemetry/auto-instrumentations-node

COPY tsconfig.json .
# Copy the rest of the application code to the working directory
COPY ./src ./src

RUN npx tsc 

# Expose the port that your app runs on
EXPOSE 8080

# Command to run your application
CMD ["npm", "start"]
