# Use Node.js LTS version
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["npm", "start"] 