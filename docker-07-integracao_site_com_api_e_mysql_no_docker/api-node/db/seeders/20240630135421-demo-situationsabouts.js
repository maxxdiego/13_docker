'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "situationsabouts"
    return queryInterface.bulkInsert('SituationsAbouts', [
      {
        nameSituation: 'Ativo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameSituation: 'Inativo',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  // Limpar os registros da tabela "SituationsAbouts"
  async down (queryInterface) {
    await queryInterface.bulkDelete('SituationsAbouts', null, {});
  }
};