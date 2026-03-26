# Step 1: Build app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Step 2: Serve with Nginx
FROM nginx:alpine

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 2000
EXPOSE 2000

# Change nginx port from 80 → 2000
RUN sed -i 's/80;/2000;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]