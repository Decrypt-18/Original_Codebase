# build environment
FROM node:16-alpine as build
ARG BUILD_ENV=production

WORKDIR /app

COPY package.json ./

COPY yarn.lock* ./

RUN yarn install

COPY . ./

RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY etc/nginx/nginx-docker.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
