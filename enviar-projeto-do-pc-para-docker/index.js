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