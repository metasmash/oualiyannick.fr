FROM node:14.16.0 as build

WORKDIR /src/oualiyannick

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY src src
COPY public public
COPY tsconfig.json .

RUN npm run build

# FROM nginx:1.21-alpine
FROM nginx:1.20-alpine

RUN apk update && apk upgrade

COPY resources/nginx.conf /etc/nginx/nginx.conf
COPY resources/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

COPY --from=build /src/oualiyannick/build /usr/share/nginx/html
