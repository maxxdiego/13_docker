FROM node:20.15

WORKDIR /api-node

ARG PORT=4000

ENV PORT=$PORT

EXPOSE $PORT

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]