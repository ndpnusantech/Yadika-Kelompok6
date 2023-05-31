import Products from "../models/productModel.js";
import Category_Penyakit from "../models/categoryPenyakitModel.js";
import Category_Obat from "../models/categoryObatModel.js";


export const getProduct = async (req, res) => {
    try {
        const response = await Products.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                id_product: req.params.id,
            },
        });

        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createProduct = async (req, res) => {
    const {
        product_name,
        product_image,
        harga,
        category_penyakit,
        categoryJenis_obat,
        stock_product,
        deskripsi,
        komposisi,
        dosis,
        aturan_pakai,
        kontra_indikasi,
        efek_samping,
        golongan_product,
        expired_product
    } = req.body;

    try {
        const categoryPenyakit = await Category_Penyakit.findOne({ where: { category_name: category_penyakit } });
        if (!categoryPenyakit) {
            return res.status(400).json({ msg: "Invalid category penyakit" });
        }

        const categoryObat = await Category_Obat.findOne({ where: { category_name: categoryJenis_obat } });
        if (!categoryObat) {
            return res.status(400).json({ msg: "Invalid category obat" });
        }

        const product = await Products.create({
            product_name,
            product_image,
            harga,
            category_penyakit,
            categoryJenis_obat,
            stock_product,
            deskripsi,
            komposisi,
            dosis,
            aturan_pakai,
            kontra_indikasi,
            efek_samping,
            golongan_product,
            expired_product
        });

        res.status(201).json({ msg: "created" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};




export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {

}



export const createCateObat = async (req, res) => {
    const { category_name } = req.body;

    const existingCate = await Category_Obat.findOne({
        where: {
            category_name: category_name
        }
    });

    if (existingCate) {
        return res.status(400).json({ msg: "Category already exists" });
    }

    try {
        const newCateObat = await Category_Obat.create({
            category_name: category_name
        });

        res.status(201).json({ msg: "Success add category" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Failed to add category" });
    }
};

export const createCatePenyakit = async (req, res) => {
    const { category_name } = req.body;

    const existingCate = await Category_Penyakit.findOne({
        where: {
            category_name: category_name
        }
    });

    if (existingCate) {
        return res.status(400).json({ msg: "Category already exists" });
    }

    try {
        const newCateObat = await Category_Penyakit.create({
            category_name: category_name
        });

        res.status(201).json({ msg: "Success add category" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Failed to add category" });
    }
};
