# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/src/server ./src/server

# Install production dependencies
RUN npm install --production

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start the application
CMD ["npm", "run", "server"] 