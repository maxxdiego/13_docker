'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomesPremiums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomesPremiums.init({
    premTitle: DataTypes.STRING,
    premSubtitle: DataTypes.STRING,
    premDesc: DataTypes.TEXT,
    premBtnText: DataTypes.STRING,
    premBtnLink: DataTypes.STRING,
    premImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesPremiums',
  });
  return HomesPremiums;
};