FROM node:19.1.0-alpine3.15 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.2
COPY --from=build /app/public /usr/share/nginx/html