import path from 'path'
import { v4 as uuidv4 } from 'uuid';

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

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ msg: "Tidak ada file yang diunggah" });
    }

    const file = req.files.product_image;
    if (!file) {
        return res.status(400).json({ msg: "File tidak ditemukan" });
    }

    const ext = path.extname(file.name);
    const allowedTypes = ['.png', '.jpg', '.jpeg'];

    if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Jenis file gambar tidak valid. Harap unggah file gambar dengan ekstensi PNG, JPG, atau JPEG." });
    }

    if (file.size > 10 * 1024 * 1024) {
        return res.status(422).json({ msg: "Ukuran file tidak boleh lebih dari 10MB." });
    }

    const filename = `${uuidv4()}${ext}`;
    const url = `${req.protocol}://${req.get('host')}/obat/${filename}`;

    file.mv(`./public/obat/${filename}`, async (err) => {
        if (err) {
            return res.status(500).json({ msg: "Terjadi kesalahan saat mengunggah gambar." });
        }

        try {
            const categoryPenyakit = await Category_Penyakit.findOne({ where: { category_name: category_penyakit } });
            if (!categoryPenyakit) {
                return res.status(400).json({ msg: "Kategori penyakit tidak valid." });
            }

            const categoryObat = await Category_Obat.findOne({ where: { category_name: categoryJenis_obat } });
            if (!categoryObat) {
                return res.status(400).json({ msg: "Kategori jenis obat tidak valid." });
            }

            const product = await Products.create({
                product_name,
                product_image: filename,
                url_image: url,
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

            res.status(201).json({ msg: "Produk berhasil dibuat." });
        } catch (error) {
            res.status(500).json({ msg: "Terjadi kesalahan saat membuat produk." });
        }
    });
};







export const updateProduct = async (req, res) => {
    try {
        const { id_product } = req.params;
        const {
            product_name,
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

        const product = await Products.findOne({ where: { id: id_product } });
        if (!product) {
            return res.status(404).json({ msg: "Produk tidak ditemukan." });
        }

        const categoryPenyakit = await Category_Penyakit.findOne({ where: { category_name: category_penyakit } });
        if (!categoryPenyakit) {
            return res.status(400).json({ msg: "Kategori penyakit tidak valid." });
        }

        const categoryObat = await Category_Obat.findOne({ where: { category_name: categoryJenis_obat } });
        if (!categoryObat) {
            return res.status(400).json({ msg: "Kategori jenis obat tidak valid." });
        }

        await Products.update({
            product_name,
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
        }, {
            where: { id: id_product }
        });

        res.json({ msg: "Produk berhasil diperbarui." });
    } catch (error) {
        res.status(500).json({ msg: "Terjadi kesalahan saat memperbarui produk." });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id_product } = req.params;

        const product = await Products.findOne({ where: { id: id_product } });
        if (!product) {
            return res.status(404).json({ msg: "Produk tidak ditemukan." });
        }

        await Products.destroy({
            where: { id: id_product }
        });

        res.json({ msg: "Produk berhasil dihapus." });
    } catch (error) {
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus produk." });
    }
};





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
