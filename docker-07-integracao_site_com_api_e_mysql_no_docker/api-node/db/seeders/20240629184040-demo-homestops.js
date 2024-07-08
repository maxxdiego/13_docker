'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // Cadastrar o registro na tabela HomesTops
  async up (queryInterface) {
    return queryInterface.bulkInsert('HomesTops', [
      {
        titleOneTop: 'Temos a solução',
        titleTwoTop: 'que a sua empresa precia',
        titleThreeTop: 'Podemos ajudar a sua empresa!',
        linkBtnTop: 'http://localhost:8080/contato',
        textBtnTop: 'Entre em contato',
        ImageTop: 'banner_top_v5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface) {
     await queryInterface.bulkDelete('HomesTops', null, {});

  }
};
