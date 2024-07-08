// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('../db/models');
// Chamar a função express
const router = express.Router();
// Validar input do formulário
const yup = require('yup')

// Criar a rota cadastrar com método post
// Endereço para acessar através da aplicação externa: http://localhost:8080/contact-menssage
/*
// A aplicação externa deve indicar que está enviado os dados em formato de objeto: Content-Type: application/json

// Dados em formato de objeto
{
    "name": "Cesar",
    "email": "cesar@celke.com.br",
    "subject": "Assunto",
    "content": "Conteúdo"
}
*/
router.post("/", async (req, res) => {

    // Receber os dados enviados no corpo da requisição
    var data = req.body;

    // Validar os dados utilizando o yup
    const schema = yup.object().shape({
        content: yup.string("Erro: Necessário preencher o campo conteúdo!")
        .required("Erro: Necessário preencher o campo conteúdo!"),
        subject: yup.string("Erro: Necessário preencher o campo assunto!")
        .required("Erro: Necessário preencher o campo assunto!"),
        email: yup.string("Erro: Necessário preencher o campo email!")
        .required("Erro: Necessário preencher o campo email!")
        .email("Erro: Necessário preencher email válido!"),
        name: yup.string("Erro: Necessário preencher o campo nome!")
            .required("Erro: Necessário preencher o campo nome!")
    })

    // Verificar se todos os campos passaram pela validação
    try{
        await schema.validate(data)
    } catch(error){
        return res.status(400).json({
            error: true,
            message: error.errors
        })
    }

    // Salvar no banco de dados
    await db.ContactsMsgs.create(data)
    .then((dataContactsMsgs) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            dataContactsMsgs
        });
    }).catch(() => {
        return res.status(400).json({
            error: true,
            message: "Erro: Mensagem não cadastrada com sucesso!"
        });
    });
});

// Exportar a instrução que está dentro da constante router 
module.exports = router;