FROM node:13 as build

WORKDIR /tmp/nc-reactor-planner-build/

COPY . .
RUN npm install && npm run build -- --prod


FROM nginx:alpine

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /tmp/nc-reactor-planner-build/dist/nc-reactor-planner /var/www/nc-reactor-planner
