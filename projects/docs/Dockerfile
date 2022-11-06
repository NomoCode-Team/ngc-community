FROM python:3.11.0-alpine3.16 as build
RUN pip3 install mkdocs
WORKDIR /app
COPY . .
RUN mkdocs build

FROM nginx:1.21.6-alpine
COPY --from=build /app/site /usr/share/nginx/html