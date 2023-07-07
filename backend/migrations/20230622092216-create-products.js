'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_image: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      id_penyakit: {
        type: Sequelize.STRING
      },
      id_jenisObat: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      komposisi: {
        type: Sequelize.STRING
      },
      dosis: {
        type: Sequelize.TEXT
      },
      aturan_pakai: {
        type: Sequelize.STRING
      },
      kontra_indikasi: {
        type: Sequelize.STRING
      },
      efek_samping: {
        type: Sequelize.TEXT
      },
      golongan_product: {
        type: Sequelize.STRING
      },
      expired_product: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Products');
  }
};