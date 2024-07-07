# Indicar que deve usar a imagem do Node.js e a versão 18.17
# Pesquisar as imagens: https://hub.docker.com
FROM node:18.17

# Definir o diretório de trabalho
WORKDIR /diego-app

# Copiar o arquivo do projeto para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Definir o comando de inicialização do aplicativo
ENTRYPOINT npm start