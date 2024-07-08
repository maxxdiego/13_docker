// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('../db/models');
// Chamar a função express
const router = express.Router();

// Criar a rota visualizar os dados da página sobre empresa com método get
// Endereço para acessar a api através de aplicação externa: http://localhost:8080/about-companies
router.get("/", async (req, res) => {

    // Recuperar os registros do banco de dados
    const aboutsCompanies = await db.AboutsCompanies.findAll({

        // Indicar quais colunas recuperar
        attributes: ['id', 
                    'title', 
                    'description',  
                    'situationAboutId',
                    // Concatenar o endereço do administrativo e o nome da imagem
                    [db.sequelize.fn('CONCAT', process.env.URL_ADM + "/images/about/", db.sequelize.col('image')), 'image']
                ],

        // Buscar dados na tabela secundária
        include: [{
            model: db.SituationsAbouts,
            attributes: ['nameSituation']
        }],

        // Ordenar os registros pela coluna id na forma decrescente
        order: [['id', 'DESC']],

        // Acrescentar condição para indicar qual registro deve ser retornado do banco de dados
        where: { situationAboutId: 1}
    })

    // Acessa o IF se encontrar o registro no banco de dados
    if (aboutsCompanies) {
        return res.json({
            error: false,
            aboutsCompanies
        })
    } else {
        return res.status(400).json({
            error: true,
            message: "Erro: Nenhum registro sobre empresa encontrado!"
        })
    }

})

// Exportar a instrução que está dentro da constante router 
module.exports = router;