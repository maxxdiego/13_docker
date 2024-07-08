// Normatizar o código
'use strict';

// Criar a constante do tipo objeto para receber a MODELS
const {
  Model
} = require('sequelize');

// Exportar a função como módulo
module.exports = (sequelize, DataTypes) => {

  // Criar a classe com o nome da tabela "HomesTops" e usar extends para trabalhar com herança
  class HomesTops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // Criar o relacionamento entre as tabelas
    static associate(models) {
      // define association here
    }
  }

  // Criar as colunas que a MODELS pode manipular
  HomesTops.init({
    titleOneTop: DataTypes.STRING,
    titleTwoTop: DataTypes.STRING,
    titleThreeTop: DataTypes.STRING,
    linkBtnTop: DataTypes.STRING,
    textBtnTop: DataTypes.STRING,
    ImageTop: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesTops',
  });

  // Retornar a classe HomesTops
  return HomesTops;
};