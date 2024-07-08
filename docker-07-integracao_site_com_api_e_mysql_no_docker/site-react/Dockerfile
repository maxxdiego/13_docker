FROM node:20.15

WORKDIR /site_react

ARG PORT=3000

ENV PORT=$PORT

EXPOSE $PORT

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]