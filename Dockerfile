FROM node:16.15.1 as build 
WORKDIR /react-app

COPY package*.json /react-app/
RUN yarn install

COPY ./ /react-app/

RUN yarn run build
FROM nginx:1.19

COPY /nginx.conf /etc/nginx/nginx.conf
COPY --from=build /react-app/build /usr/share/nginx/html