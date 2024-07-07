# Enviando projeto do PC para o Docker

## SEQUENCIA PARA CRIAR O PROJETO
### 1. Criar o arquivo package
```bash
npm init
```

### 2. Gerencia as requisições, rotas e URLs, entre outra funcionalidades
```bash
npm install --save express
```

### 3. Criar o arquivo index.js (arquivo principal do projeto)
```bash
// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

// Criar a rota visualizar com método get
// Endereço para acessar a api através de aplicação externa: http://localhost:8080
app.get("/", (req, res) => {

    // Retornar a resposta para quem fez a requisição para a rota "visualizar"
    res.send("Docker, bem-vindo Diego!");
});

// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen("8080", () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
```

### 4. Rodar o projeto
```bash
node index.js
```

### 5. Abrir o endereço no navegador para acessar a rota inicial
```bash
http://localhost:8080
```

### 6. Criar o arquivo Dockerfile na raiz do projeto

### Informações do Dockerfile:

```bash
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
```

### -------------------------------------------------

## COMO RODAR NO DOCKER O PROJETO
### Acessar o diretório onde está o projeto
```bash
cd <endereco>
Exemplo: cd C:\diego\projeto-base
```

### Listar arquivos
```bash
ls
```

### Criar a build, -t criar o nome para imagem, versão 1.0, "." ponto para indicar o diretório atual 
```bash
docker build -t diego/app-node:1.0 .
```

### Listar as imagens
```bash
docker images
```

### Executar a imagem, mapear a porta, indicar a porta 8080 da máquina corresponde à porta 8080 do docker, imagem que deve ser executada e a versão
```bash
docker run -d -p 8080:8080 diego/app-node:1.0
```

### Abrir o endereço no navegador para acessar a rota inicial
```bash
http://localhost:8080
```

### Listar os contêineres em execução no momento
```bash
docker ps
```

### Pausar o container
```bash
docker stop ID_DO_CONTAINER
```

### Forçar o container pausar
```bash
docker stop -t=0 ID_DO_CONTAINER
```

### Iniciar o container
```bash
docker start ID_DO_CONTAINER
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458