# Dockerfile

# Step 1: Use Node.js for building the application
FROM node:18 as builder

# Create working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production
RUN npm run build-storybook

# Step 2: Use a lightweight web server for serving static files
FROM nginx:alpine

# Working directory
WORKDIR /usr/share/nginx/Singh_Arshpreet_ui_garden

# Copy the build output to the web server’s static file directory
COPY --from=builder /app/storybook-static /usr/share/nginx/Singh_Arshpreet_ui_garden

# Expose port 8083 to access Storybook
EXPOSE 8083

# Run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
