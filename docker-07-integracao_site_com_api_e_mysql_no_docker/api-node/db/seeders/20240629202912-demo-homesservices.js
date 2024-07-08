'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('HomesServices', [
      {
        servTitle: 'Serviços',
        servIconOne: 'fa-solid fa-wifi',
        servTitleOne: 'Wifi veloz',
        servDescOne: 'Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat.',
        
        servIconTwo: 'fa-solid fa-rocket',
        servTitleTwo: 'Espaço inspirador',
        servDescTwo: 'Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat.',
        
        servIconThree: 'fa-solid fa-handshake',
        servTitleThree: 'Reuniões',
        servDescThree: 'Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat.',
        
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, ) {
    await queryInterface.bulkDelete('HomesServices', null, {});

  }
};
