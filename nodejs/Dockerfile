FROM node:18-alpine
WORKDIR /usr/app/backend
COPY package*.json ./
RUN npm install
COPY ./src ./src
WORKDIR ./src
CMD ["node", "app.js"]
EXPOSE 3001