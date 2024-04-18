FROM node:18-alpine
WORKDIR /usr/app/backend
COPY package*.json ./
RUN npm install
COPY . ./
WORKDIR /usr/app/backend/src
EXPOSE 3001
CMD ["node", "app.js"]