'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentsContacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContentsContacts.init({
    titleContact: DataTypes.STRING,
    descContact: DataTypes.STRING,
    iconCompany: DataTypes.STRING,
    titleCompany: DataTypes.STRING,
    descCompany: DataTypes.STRING,
    iconAddress: DataTypes.STRING,
    titleAddress: DataTypes.STRING,
    descAddress: DataTypes.STRING,
    iconEmail: DataTypes.STRING,
    titleEmail: DataTypes.STRING,
    descEmail: DataTypes.STRING,
    titleForm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentsContacts',
  });
  return ContentsContacts;
};