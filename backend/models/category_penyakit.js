'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_penyakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_penyakit.init({
    penyakit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_penyakit',
  });
  return category_penyakit;
};