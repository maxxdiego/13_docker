# Criando variável de ambiente e informando a porta utilizada no container

### 1. Alterar no arquivo index.js:
```bash
// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
```
### 2. Alterar o arquivo Dockerfile:

```bash
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
docker build -t diego/app-node:1.1 .
```

### Listar as imagens
```bash
docker images
```

### Executar a imagem, mapear a porta, indicar a porta 8080 da máquina corresponde à porta 8080 do docker, imagem que deve ser executada e a versão
```bash
docker run -d -p 8080:8080 diego/app-node:1.1
```

### Abrir o endereço no navegador para acessar a rota inicial
```bash
http://localhost:8080
```

### Listar todos os containers em execução e parados
```bash
docker ps -a
```

### Pausar o container
```bash
docker stop ID_DO_CONTAINER
```

### Apagar o container
```bash
docker rm ID_DO_CONTAINER
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458