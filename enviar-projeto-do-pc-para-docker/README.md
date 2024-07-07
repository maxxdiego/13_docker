### -------------------------------------------------

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install --save express

Abrir o endereço no navegador para acessar a rota inicial
### http://localhost:8080

### -------------------------------------------------

COMO RODAR FORA DO DOCKER O PROJETO BAIXADO 
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto
### node index.js

Abrir o endereço no navegador para acessar a rota inicial
### http://localhost:8080

### -------------------------------------------------

## Criar o arquivo Dockerfile na raiz do projeto

### Informações do Dockerfile:

### Indicar que deve usar a imagem do Node.js e a versão 18.17
### Pesquisar as imagens: https://hub.docker.com
FROM node:18.17

### Definir o diretório de trabalho
WORKDIR /diego-app

### Copiar o arquivo do projeto para o diretório de trabalho
COPY package*.json ./

### Instalar as dependências do projeto
RUN npm install

### Copiar o restante dos arquivos do projeto
COPY . .

### Definir o comando de inicialização do aplicativo
ENTRYPOINT npm start

### -------------------------------------------------

COMO RODAR NO DOCKER O PROJETO BAIXADO
Acessar o diretório onde está o projeto
### cd <endereco>
### Exemplo: cd C:\diego\projeto-base

Listar arquivos
### ls

Criar a build, -t criar o nome para imagem, versão 1.0, "." ponto para indicar o diretório atual 
### docker build -t diego/app-node:1.0 .

Listar as imagens
### docker images

Executar a imagem, mapear a porta, indicar a porta 8080 da máquina corresponde à porta 8080 do docker, imagem que deve ser executada e a versão
### docker run -d -p 8080:8080 diego/app-node:1.0

Abrir o endereço no navegador para acessar a rota inicial
### http://localhost:8080

Listar os contêineres em execução no momento
### docker ps

Pausar o container
### docker stop ID_DO_CONTAINER

Forçar o container pausar
### docker stop -t=0 ID_DO_CONTAINER

Iniciar o container
### docker start ID_DO_CONTAINER