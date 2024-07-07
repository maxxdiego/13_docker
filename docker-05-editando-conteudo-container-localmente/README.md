# Editar o conteúdo do container localmente

### Criar a build
```bash
docker-compose up -d --build
```

### Criar e iniciar serviços definidos em um arquivo docker-compose.yml
```bash
docker compose up
```

### Remover os containers
```bash
docker container rm $(docker container ls -aq) --force
```

### Remover as imagens
```bash
docker rmi $(docker image ls -aq) --force
```

### Interromper e remover todos os serviços, containers, redes e volumes definidos em um arquivo docker-compose.yml
```bash
docker-compose down
```

### Remover recursos não utilizados do Docker, incluindo imagens, containers, redes e volumes
```bash
docker system prune -a --volumes
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458
