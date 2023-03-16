# Use the official Node.js 18 image as the base image
FROM node:18 AS builder

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN npm run build

# Use a lightweight Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the production build files from the builder image to the container
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

COPY package*.json ./

# Expose port 3000 for the NestJS application
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
