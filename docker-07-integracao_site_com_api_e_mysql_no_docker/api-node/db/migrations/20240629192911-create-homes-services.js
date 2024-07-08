'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomesServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      servTitle: {
        type: Sequelize.STRING
      },
      servIconOne: {
        type: Sequelize.STRING
      },
      servTitleOne: {
        type: Sequelize.STRING
      },
      servDescOne: {
        type: Sequelize.STRING
      },
      servIconTwo: {
        type: Sequelize.STRING
      },
      servTitleTwo: {
        type: Sequelize.STRING
      },
      servDescTwo: {
        type: Sequelize.STRING
      },
      servIconThree: {
        type: Sequelize.STRING
      },
      servTitleThree: {
        type: Sequelize.STRING
      },
      servDescThree: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HomesServices');
  }
};