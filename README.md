# Docker
![NPM](https://img.shields.io/npm/l/react)

# Descrição:

Docker é uma plataforma de software que facilita a criação, o teste e a implantação de aplicações em contêineres. Os contêineres são unidades padronizadas de software que empacotam o código da aplicação e todas as suas dependências, garantindo que ela funcione de maneira consistente em diferentes ambientes.

## Principais Características do Docker
- Contêineres: Docker encapsula a aplicação e suas dependências em contêineres, que são isolados uns dos outros e do sistema operacional host.
- Portabilidade: Os contêineres Docker podem ser executados em qualquer lugar, seja no ambiente local, em servidores de produção, ou em nuvens públicas e privadas.
- Eficiente em Recursos: Os contêineres compartilham o núcleo do sistema operacional host, tornando-os mais leves e eficientes em comparação com máquinas virtuais.
- Facilidade de Configuração: Dockerfiles e Compose permitem definir e configurar o ambiente da aplicação de maneira declarativa e reprodutível.

## Vantagens do Docker
- Consistência: Garantia de que a aplicação funcionará de forma idêntica em diferentes ambientes, eliminando problemas de compatibilidade.
- Agilidade no Desenvolvimento: Facilita a criação de ambientes de desenvolvimento e testes consistentes e isolados, acelerando o ciclo de desenvolvimento.
- Escalabilidade: Simplifica o escalonamento de aplicações, permitindo a execução de múltiplos contêineres de uma aplicação em diferentes máquinas.
- Facilidade de Implementação: Simplifica o processo de implantação, reduzindo o tempo e os erros associados a implantações manuais.

Docker é amplamente utilizado para melhorar a eficiência do desenvolvimento, teste e implantação de aplicações, tornando-se uma ferramenta essencial no DevOps e na engenharia de software moderna.

### Meu repositório no Docker Hub:
```bash
https://hub.docker.com/u/maxxdiego
```

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

### ------------------------------------------------------------------

# Acessando o conteúdo de um site pelo navegador

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

### Acessar a aplicação pelo navegador:
```bash
http://localhost:80
```
### ------------------------------------------------------------------

### Removendo as imagens
```bash
docker rmi <nome_da_imagem>
```

### Removendo todos os containers
```bash
docker container rm $(docker container ls -aq) --force
```

### Renomeando imagens 
```bash
docker tag <nome_da_imagem_atual:tag_atual> <nome_da_nova_imagem:nova_tag>
```

### Removendo todas as imagens
```bash
docker rmi $(docker image ls -aq) --force
```

<hr>

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458
