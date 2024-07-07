# Conectando a aplicação Node.js com Mysql no Docker (Multi-Containers)

### Criar a build
```bash
docker-compose up -d --build
```

### Criar e iniciar serviços definidos em um arquivo docker-compose.yml
```bash
docker compose up
```

### Acessar o container com MySQL
```bash
docker exec -it NOME-DO-CONTAINER bash
docker exec -it diego-mysql bash
```

### Acessar o MySQL
```bash
mysql -u root -p
```

### Listar as base de dados
```bash
SHOW DATABASES;
```

### Listar as tabelas da base de dados nodeapp
```bash
USE nodeapp; SHOW tables;
```
### Acessar o container com a aplicação criada com Node.js
```bash
docker exec -it NOME-DO-CONTAINER bash
docker exec -it diego-app bash
```

### Executar as migrations
```bash
npx sequelize-cli db:migrate
```

### Executar as seeders
```bash
npx sequelize-cli db:seed:all
```

### Listar os usuários da tabela Users
```bash
USE nodeapp; SELECT * FROM Users;
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458