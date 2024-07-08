'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomesServices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomesServices.init({
    servTitle: DataTypes.STRING,
    servIconOne: DataTypes.STRING,
    servTitleOne: DataTypes.STRING,
    servDescOne: DataTypes.STRING,
    servIconTwo: DataTypes.STRING,
    servTitleTwo: DataTypes.STRING,
    servDescTwo: DataTypes.STRING,
    servIconThree: DataTypes.STRING,
    servTitleThree: DataTypes.STRING,
    servDescThree: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesServices',
  });
  return HomesServices;
};