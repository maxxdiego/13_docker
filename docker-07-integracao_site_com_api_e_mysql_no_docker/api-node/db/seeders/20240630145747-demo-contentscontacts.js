// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "ContentsContacts"
    return queryInterface.bulkInsert('ContentsContacts', [
      {
        titleContact: 'Contato',
        descContact: 'Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.',

        iconCompany: 'fa-solid fa-user',
        titleCompany: 'Empresa',        
        descCompany: 'Celke',

        iconAddress: 'fa-solid fa-location-dot',
        titleAddress: 'Endereço',        
        descAddress: 'Avenida Winston Churchill',

        iconEmail: 'fa-solid fa-envelope',
        titleEmail: 'E-mail',
        descEmail: 'cesar@celke.com.br',

        titleForm: 'Mensagem de Contato',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // Limpar os registros da tabela "ContentsContacts"
  async down (queryInterface) {
    await queryInterface.bulkDelete('ContentsContacts', null, {});
  }
};