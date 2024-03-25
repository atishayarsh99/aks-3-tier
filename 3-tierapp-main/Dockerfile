# Use the official Node.js 14 image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install


# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "src/index.js"]
