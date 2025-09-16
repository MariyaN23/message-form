# Use Node.js as the base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY backend/package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application
COPY backend .

# Expose the backend port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
