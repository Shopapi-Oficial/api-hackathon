FROM node:12-alpine

RUN mkdir -p /var/www

WORKDIR /var/www

COPY ./package*.json ./

RUN npm install

COPY ./dist/api ./


EXPOSE 3000

ENTRYPOINT [ "npm", "run", "server" ]
