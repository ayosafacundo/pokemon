FROM node:lts-alpine3.23

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install && npm run build

CMD ["npm", "run", "start"]