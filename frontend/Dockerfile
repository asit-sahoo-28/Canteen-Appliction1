# Step 1: Build app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Step 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Change nginx port from 80 → 3000
RUN sed -i 's/80;/3000;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]