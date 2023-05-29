import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Categorys from "./categoryModel.js";

const { DataTypes } = Sequelize;

const Products = db.define('products', {
    id_product: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true
        },
        set(value) {
            const prefix = value.substring(0, 3).toLowerCase(); // Mengambil tiga huruf pertama dari nama produk dan mengonversikannya menjadi huruf kecil
            const randomNum = Math.floor(Math.random() * 10000); // Menghasilkan angka acak antara 0 dan 9999
            this.setDataValue('id_product', `${prefix}-${randomNum}`); // Menggabungkan prefix dengan angka acak dan mengatur nilainya
        }
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    product_image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    harga: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    jenis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    stock_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    komposisi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    dosis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    aturan_pakai: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    kontra_indikasi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    efek_samping: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    golongan_product: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    expired_product: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});



export default Products;
