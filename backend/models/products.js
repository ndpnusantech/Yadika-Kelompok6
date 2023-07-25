'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    product_name: DataTypes.STRING,
    product_image: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.FLOAT,
    id_penyakit: DataTypes.STRING,
    id_jenisObat: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    deskripsi: DataTypes.TEXT,
    komposisi: DataTypes.STRING,
    dosis: DataTypes.TEXT,
    aturan_pakai: DataTypes.STRING,
    kontra_indikasi: DataTypes.STRING,
    efek_samping: DataTypes.TEXT,
    id_golObat: DataTypes.STRING,
    expired_product: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};