### Instalar as dependências do projeto
```bash
npm install
```

### Criar a base de dados "api_site" no MySQL
Alterar as credênciais do banco de dados no arquivo ".env"
```bash
CREATE DATABASE api_site CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
```

### Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte
```bash
npm install --save-dev nodemon
```

### Rodar o projeto usando o nodemon
```bash
nodemon app.js
```

### Abrir o endereço no navegador para acessar a página inicial
```bash
http://localhost:8080
```

### Sequelize-cli interface de linha de comando parar criar modelos, configurações e arquivos de migração para banco de dados
```bash
npm install --save-dev sequelize-cli
```

### Iniciar o Sequelize-cli e criar o arquivo config
```bash
npx sequelize-cli init
```

### Manipular variáveis de ambiente
```bash
npm install dotenv --save
```

### Criar a migration da página home do conteúdo do topo
```bash
npx sequelize-cli migration:generate --name create-homes-tops
```

### Criar a migration para acrescentar a coluna imageTop
```bash
npx sequelize-cli migration:generate --name alter-homes-tops-add-imagetop
```

### Executar as migrations
```bash
npx sequelize-cli db:migrate
```

### Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
```bash
npx sequelize-cli db:migrate:undo --name nome-da-migration
```

### Criar a Models da página home do conteúdo do topo
```bash
npx sequelize-cli model:generate --name HomesTops --attributes titleOneTop:string,titleTwoTop:string,titleThreeTop:string,linkBtnTop:string,textBtnTop:string,ImageTop:string
```

### Criar seeders
```bash
npx sequelize-cli seed:generate --name demo-nome-da-seeders
```

### Executar seeders
```bash
npx sequelize-cli db:seed:all
```

### Executar uma única seeders
```bash
npx sequelize-cli db:seed --seed nome-da-seed
```

### Executar down - rollback - Permite que seja desfeita todas as seeders, permitindo a gestão das alterações do banco de dados e versionamento.
```bash
npx sequelize-cli db:seed:undo
```

### Executar down - rollback - Permite que seja uma única seeders, permitindo a gestão das alterações do banco de dados e versionamento.
```bash
npx sequelize-cli db:seed:undo --seed nome-da-seed
```

### Criar a Models da página home do conteúdo dos serviços
```bash
npx sequelize-cli model:generate --name HomesServices --attributes servTitle:string,servIconOne:string,servTitleOne:string,servDescOne:string,servIconTwo:string,servTitleTwo:string,servDescTwo:string,servIconThree:string,servTitleThree:string,servDescThree:string
```

### Criar a Models da página home do conteúdo do serviço premium
```bash
npx sequelize-cli model:generate --name HomesPremiums --attributes premTitle:string,premSubtitle:string,premDesc:text,premBtnText:string,premBtnLink:string,premImage:string
```

### Criar a Models da situação 
```bash
npx sequelize-cli model:generate --name SituationsAbouts --attributes nameSituation:string
```

### Criar a Models da página sobre empresa
```bash
npx sequelize-cli model:generate --name AboutsCompanies --attributes title:string,description:text,image:text,situationAboutId:integer
```

### Criar a Models da página contato do conteúdo texto 
```bash
npx sequelize-cli model:generate --name ContentsContacts --attributes titleContact:string,descContact:string,iconCompany:string,titleCompany:string,descCompany:string,iconAddress:string,titleAddress:string,descAddress:string,iconEmail:string,titleEmail:string,descEmail:string,titleForm:string
```

### Criar a Models da página contato para receber as mensagens de contato 
```bash
npx sequelize-cli model:generate --name ContactsMsgs --attributes name:string,email:string,subject:string,content:text
```

### Validar formulário
```bash
npm install -S yup
```