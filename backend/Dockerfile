# Use Node LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy all files
COPY . .

# Expose your port
EXPOSE 4000

# Start your server
CMD ["npm", "start"]