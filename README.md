# Docker
![NPM](https://img.shields.io/npm/l/react)

# Descrição
:warning: Ainda em construção. :construction:

## Aprendendo o Docker

### Endereço do Docker Hub (imagens oficiais)
```bash
https://hub.docker.com
```

### Baixar uma imagem de exemplo do Docker Hub
```bash
docker pull hello-world
```

### Verificar as imagens existentes na máquina
```bash
docker images
```

### Rodar o container
```bash
docker run hello-world
```

### Verificar containers sendo executados
```bash
docker container ls -a
```

### Baixar imagem oficial Ubuntu do Docker Hub
```bash
docker pull ubuntu
```

### Rodar o container do Ubuntu
```bash
docker run ubuntu
```

### Deixar o container rodando por 1 dia
```bash
docker run ubuntu sleep 1d
```

### Verificar containers rodando atualmente
```bash
docker ps
```

### Parar o container
```bash
docker stop <container_id>
```

### Eliminar tempo de espera na interrupção do container
```bash
docker stop -t=0 <container_id>
```

### Startar o container
```bash
docker start <container_id>
```

### Executar o container do Ubuntu
```bash
docker exec -it <container_id> bash
```

### Pausar o container
```bash
docker pause <container_id>
```

### Despausar o container
```bash
docker unpause <container_id>
```

### Remover o container (é necessário interromper a execução antes)
```bash
docker rm <container_id>
```

## Acessando o conteúdo de um site pelo navegador

### Baixar e rodar o exemplo de um site estático do Docker Hub
```bash
docker run -d dockersamples/static-site
```

### Verificar containers rodando atualmente
```bash
docker ps
```

### Remover o container forçando (sem interromper a execução antes)
```bash
docker rm <container_id> --force
```

### Baixar novamente mapeando a porta 80 do container para a porta 80 (para ser acessado pelo navegador)
```bash
docker run -d -p 80:80 dockersamples/static-site
```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458
