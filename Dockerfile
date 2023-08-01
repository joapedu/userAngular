FROM node:19.6.1 as angular

LABEL maintainer="João Eduardo Braga <joaoeduardobraga2@gmail.com>"

WORKDIR /app

COPY . .

# silent to ignoring logs
RUN npm install --silent

RUN npm run build

# nginx
FROM nginx:1.15-alpine

RUN rm /usr/share/nginx/html/* -f

COPY --from=angular app/dist /usr/share/nginx/html

EXPOSE 80
