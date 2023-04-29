FROM node:lts-alpine3.16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 9080
CMD ["npm","start"]