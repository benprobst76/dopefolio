# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

# filepath: /C:/Users/owner/Code/portfolio/dopefolio/Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:14 as base

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Run the build script.
RUN npm run build

# Run the application.
CMD ["npm", "start"]