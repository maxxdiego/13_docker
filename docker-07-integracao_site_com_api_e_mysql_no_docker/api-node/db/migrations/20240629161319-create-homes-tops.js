'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomesTops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titleOneTop: {
        type: Sequelize.STRING
      },
      titleTwoTop: {
        type: Sequelize.STRING
      },
      titleThreeTop: {
        type: Sequelize.STRING
      },
      linkBtnTop: {
        type: Sequelize.STRING
      },
      textBtnTop: {
        type: Sequelize.STRING
      },
      ImageTop: {
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
    await queryInterface.dropTable('HomesTops');
  }
};
