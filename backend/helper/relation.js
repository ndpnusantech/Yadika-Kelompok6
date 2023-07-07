const sequelize = require('../models/index.js').sequelize
const { DataTypes } = require('sequelize')

// Models
const Users = require('../models/products.js')(sequelize, DataTypes)
const Product = require('../models/products.js')(sequelize, DataTypes);
const Category_penyakit = require('../models/category_penyakit.js')(sequelize, DataTypes);
const Category_jenisObat = require('../models/category_jenisobat.js')(sequelize, DataTypes);

// Relation antara Product dan Category_penyakit
Product.belongsTo(Category_penyakit, {
    foreignKey: 'id_penyakit',
    as: 'category_penyakits',
});
Category_penyakit.hasMany(Product, {
    foreignKey: 'id_penyakit',
    as: 'products',
});

// Relation antara Product dan Category_jenisObat
Product.belongsTo(Category_jenisObat, {
    foreignKey: 'id_jenisObat',
    as: 'category_jenisObats',
});
Category_jenisObat.hasMany(Product, {
    foreignKey: 'id_jenisObat',
    as: 'products',
});



module.exports = { Users, Product, Category_penyakit, Category_jenisObat };
