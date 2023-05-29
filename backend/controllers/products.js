import Products from "../models/productModel.js";
import Categorys from "../models/categoryModel.js";
import Jeniss from "../models/jenisModel.js";

export const getProduct = async (req, res) => {
    try {
        const response = await Products.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                id: req.params.id
            }
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
    const { product_name, category, jenis, ...otherFields } = req.body;

    try {
        // check apakah ada category obat ini di table category
        const category = await Categorys.findOne({ where: { category_name } });
        if (!category) {
            return res.status(400).json({ msg: "Invalid category" });
        }

        // Check apakah ada jenis obat ini di table jenis
        const jenisExists = await Jeniss.findOne({ where: { jenis } });
        if (!jenisExists) {
            return res.status(400).json({ msg: "Invalid jenis" });
        }

        const product = await Products.create({
            product_name,
            category,
            jenis,
            ...otherFields,
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};



export const updateProduct = (req, res) => {

}
export const deleteProduct = (req, res) => {

}