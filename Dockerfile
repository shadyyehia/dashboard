FROM node:latest  as build 

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .

RUN npm run build 

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 

COPY --from=build /app/build /usr/share/nginx/html 