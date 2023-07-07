'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_jenisObat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_jenisObat.init({
    jenisObat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_jenisObat',
  });
  return category_jenisObat;
};