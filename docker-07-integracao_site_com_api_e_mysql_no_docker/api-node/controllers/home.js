const express = require('express')
const router = express.Router()

// Incluir o arquivo que possui a conexão com o banco de dados
const db = require('./../db/models')

// Endpoint /home
router.get("/", async (req, res) => {
    // Recuperar o registro do banco de dados da tabela HomesTops
    const homesTops = await db.HomesTops.findOne({
        // Indicar quais colunas recuperar
        attributes: ['titleOneTop', 'titleTwoTop', 'titleThreeTop', 'linkBtnTop', 'textBtnTop', 'imageTop'],

        // Acrescentar condição para indicar qual registro deve ser retornado do banco de dados
        // where: { id : 100 }
    })

        // Recuperar o registro do banco de dados da tabela HomesServices
        const homesServices = await db.HomesServices.findOne({
            // Indicar quais colunas recuperar
            attributes: ['servTitle', 'servIconOne', 'servTitleOne', 'servDescOne', 'servIconTwo', 'servTitleTwo', 'servDescTwo', 'servIconThree', 'servTitleThree', 'servDescThree'],
    
            // Acrescentar condição para indicar qual registro deve ser retornado do banco de dados
            // where: { id : 100 }
        })

        // Recuperar o registro do banco de dados da tabela HomesServices
        const homesPremiums = await db.HomesPremiums.findOne({
            // Indicar quais colunas recuperar
            attributes: ['premTitle', 'premSubtitle', 'premDesc', 'premBtnText', 'premBtnLink', 'premImage'],
    
            // Acrescentar condição para indicar qual registro deve ser retornado do banco de dados
            // where: { id : 100 }
        })

    // Acessa o IF se encontrar o registro no banco de dados
    if((homesTops) && (homesServices) && (homesPremiums)) {

        // console.log(homesTops)

        // Cria o caminho da imagem
        homesTops.dataValues['imageTop'] = process.env.URL_ADM + "/images/home_top/" + homesTops.dataValues['imageTop']
        homesPremiums.dataValues['premImage'] = process.env.URL_ADM + "/images/home_prem/" + homesPremiums.dataValues['premImage']

        return res.json({
            error: false,
            homesTops,
            homesServices,
            homesPremiums
        })
    } else {
        return res.status(400).json({
            error: true,
            message: "Erro: Não encontrado o conteúdo da página home do site!"
        })
    }
})

module.exports = router