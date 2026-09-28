FROM node:lts-alpine3.23 AS builder 

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html/pokemon
EXPOSE 80
RUN ls /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]