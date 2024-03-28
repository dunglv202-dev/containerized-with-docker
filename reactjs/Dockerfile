FROM node:18-alpine
WORKDIR /usr/app/frontend
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
CMD ["npm", "start"]
EXPOSE 3000