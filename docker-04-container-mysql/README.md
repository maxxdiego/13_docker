**************** Criar o container com MySQL e mapear a porta para acessar localmente **************************
Instalar e executar o MySQL no Docker

Baixar a imagem do MySQL para o Docker
### docker pull mysql:8.1.0

Criar o container com MySQL, mapear a porta e indicar que a porta 3306 da máquina corresponde à porta 3306 do Docker, atribuir o nome do container, utilizar o usuário padrão do MySQL, definir a senha como 123456 e executar o MySQL em segundo plano, ou seja, em modo "detached" sem bloquear o terminal.
### docker run -p 3306:3306 --name mysql_appnode -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.1.0

Abrir no Workbench e criar a base de dados appnode
### CREATE DATABASE appnode CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Acessar a base de dados atraves do PowerShell
### docker exec -it mysql_appnode mysql -u root -p

Listar as base de dados
### SHOW DATABASES;

Listar as tabelas da base de dados celke
### USE appnode; SHOW tables;

### ------------------------------------------------------

COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Criar a base de dados "appnode" no MySQL
Alterar as credenciais do banco de dados no arquivo ".env"

Executar as migrations
### npx sequelize-cli db:migrate

Executar as seeders
### npx sequelize-cli db:seed:all

Rodar o projeto
### node app.js

Rodar o projeto usando o nodemon
### nodemon app.js

### ------------------------------------------------------

Acessar a base de dados atraves do PowerShell
### docker exec -it mysql_appnode mysql -u root -p

Listar as tabelas da base de dados celke
### USE appnode; SHOW tables;

Listar os usuários da tabela Users
### USE appnode; SELECT * FROM Users;

Sair do MySQL no PowerShell
### CTRL + d

Remover todos os containers
### docker container rm $(docker container ls -aq) --force

Listar todos os contêineres em execução e parados
### docker ps -a

Pausar o container
### docker stop ID_DO_CONTAINER

Remover todas as imagens
### docker rmi $(docker image ls -aq)

Se apreentar erro ao remover todas as imagens, forçar a remoção
### docker rmi $(docker image ls -aq) --force

### ------------------------------------------------------

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458
