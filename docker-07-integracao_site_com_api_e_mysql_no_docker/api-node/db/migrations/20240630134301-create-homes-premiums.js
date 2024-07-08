'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomesPremiums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      premTitle: {
        type: Sequelize.STRING
      },
      premSubtitle: {
        type: Sequelize.STRING
      },
      premDesc: {
        type: Sequelize.TEXT
      },
      premBtnText: {
        type: Sequelize.STRING
      },
      premBtnLink: {
        type: Sequelize.STRING
      },
      premImage: {
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
    await queryInterface.dropTable('HomesPremiums');
  }
};