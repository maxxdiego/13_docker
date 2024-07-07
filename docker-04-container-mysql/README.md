# Enviar projeto para o Dockerhub

### 1. Fazer a build (imagem) no docker:
```bash
docker build -t maxxdiego/app-node:1.0 .
```

### 2. Executar a imagem mapeando a porta:
```bash
docker run -d -p 8080:8080 maxxdiego/app-node:1.0
```

### 3. Enviar a imagem para o Docker Hub:
```bash
docker <nome_da_imagem:tag>
docker push maxxdiego/app-node:1.0
```
### Informar dados de login (caso necessário):
```bash
docker login -u <seu_usuário>
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458