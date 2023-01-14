FROM node:17-alpine3.14 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=build /app/dist /usr/share/nginx/html