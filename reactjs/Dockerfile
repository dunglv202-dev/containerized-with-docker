FROM node:18-alpine AS build
ARG SERVER_ADDRESS=localhost
ENV REACT_APP_SERVER_ADDRESS=$SERVER_ADDRESS
WORKDIR /usr/app/frontend
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:stable-alpine AS production
EXPOSE 80
COPY --from=build /usr/app/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/templates/default.conf.template
CMD ["nginx", "-g", "daemon off;"]