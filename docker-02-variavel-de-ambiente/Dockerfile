# Indicar que deve usar a imagem do Node.js e a versão 18.17
# Pesquisar as imagens: https://hub.docker.com
FROM node:18.17

# Definir o diretório de trabalho
WORKDIR /diego-app

# Definir a porta como variável de argumento que será enviada para o Docker durante o processo de construção da imagem. Mas ARG somente existe durante a build;
ARG PORT=8080

# ENV é usada para informar ao Docker quais portas de rede o container está escutando em tempo de execução.
ENV PORT=$PORT

# EXPOSE é usada para informar ao Docker quais portas de rede o container está escutando em tempo de execução.
EXPOSE $PORT

# Copiar o arquivo do projeto para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Definir o comando de inicialização do aplicativo
ENTRYPOINT npm start