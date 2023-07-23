'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keranjang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  keranjang.init({
    id_product: DataTypes.STRING,
    id_user: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    total_harga: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'keranjang',
  });
  return keranjang;
};