# Use Node.js as base image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# SET ENVIRONMENT VARIABLES
ENV ENVIRONMENT
ENV API_URL
ENV API_KEY
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use NGINX as base image for serving the Angular app
FROM nginx:1.25.4-alpine

# Copy the built Angular app to NGINX
COPY --from=build /usr/src/app/dist/ang-dockerized-app /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
