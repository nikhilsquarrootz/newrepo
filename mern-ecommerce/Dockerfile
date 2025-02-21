# Base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json files for both client and server
COPY package.json ./
COPY client/package.json ./client/

# Install dependencies
RUN npm install
RUN cd client && npm install

# Copy source code
COPY . .

# Build the React app
RUN cd client && npm run build

# Expose port for server
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
