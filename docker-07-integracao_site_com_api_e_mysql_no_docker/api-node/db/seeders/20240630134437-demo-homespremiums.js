'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "homestops"
    return queryInterface.bulkInsert('HomesPremiums', [
      {
        premTitle: 'Serviço Premium',
        premSubtitle: 'Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.',
        premDesc: '<p>Ut tempus dui in fringilla consequat. Donec accumsan feugiat venenatis. Vestibulum blandit lectus nec lacus tincidunt tempus. Praesent porta erat non ligula egestas, eget imperdiet justo egestas. Pellentesque cursus risus nec leo tincidunt fringilla.</p><p>Suspendisse faucibus aliquam vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci.</p><p>Vestibulum mollis lit vel tellus viverra dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a mattis sem. Cras aliquam fermentum viverra.</p>',
        premBtnText: 'Contato',        
        premBtnLink: 'http://localhost:8080/contato',
        premImage: 'premium_v5.jpg',       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  // Limpar os registros da tabela "HomesPremiums"
  async down (queryInterface) {
    await queryInterface.bulkDelete('HomesPremiums', null, {});
  }
};