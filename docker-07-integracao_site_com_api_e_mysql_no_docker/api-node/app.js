const express = require('express')
const app = express()

// Incluir o módulo para gerenciar diretórios e caminhos
const path = require("path")
// Importando o CORS
const cors = require('cors') 

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Criar o middleware para permitir requisição externa
app.use((req, res, next) => {
    // Qualquer endereço pode fazer requisição "*"
    res.header("Access-Control-Allow-Origin", "*")
    // Tipos de métodos que a API aceita
    res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type")
    // Executar o cors
    app.use(cors())
    // Quando não houver erro deve continuar o processamento
    next()

})

// Testar conexão com banco de dados
// const db = require("./db/models")

// Local dos arquivos estáticos
app.use(express.static(path.join(__dirname, "public")))

// Importando controllers
const home = require("./controllers/home")
const aboutsCompanies = require("./controllers/aboutsCompanies")
const contentsContacts = require("./controllers/contentsContacts")
const contactMessage = require("./controllers/contactMessage")

// Criando as rotas
app.use('/home', home)
app.use('/about-companies', aboutsCompanies)
app.use('/contents-contacts', contentsContacts)
app.use('/contact-message', contactMessage)

const port = process.env.PORT
app.listen(port, error => {
    if (error) {
        console.log(`Ocorreu um erro: ${error}`)
    } else {
        console.log(`Servidor rodando em http://localhost:${port}`)
    }
})