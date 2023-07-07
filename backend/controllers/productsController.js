const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const { Product } = require('../helper/relation.js')


exports.getProducts = async (req, res) => {
    try {
        const response = await Product.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findOne({
            where: {
                id: productId,
            },
        });

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ msg: 'Produk tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.createProduct = async (req, res) => {
    const {
        product_name,
        price,
        id_penyakit,
        id_jenisObat,
        stock,
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
        return res.status(404).json({ msg: "File tidak ditemukan" });
    }

    const timeStamp = Date.now();
    const ext = path.extname(file.name);
    const randomString = crypto.randomBytes(8).toString("hex");
    const allowedTypes = ['.png', '.jpg', '.jpeg'];

    if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Jenis file gambar tidak valid. Harap unggah file gambar dengan ekstensi PNG, JPG, atau JPEG" });
    }

    if (file.size > 10 * 1024 * 1024) {
        return res.status(422).json({ msg: "Ukuran file tidak boleh lebih dari 10MB" });
    }

    const filename = `${timeStamp}-${randomString}${ext}`;
    const url = `${req.protocol}://${req.get('host')}/obat/${filename}`;

    file.mv(`./public/obat/${filename}`, async (err) => {
        if (err) {
            return res.status(500).json({ msg: "Terjadi kesalahan saat mengunggah gambar" });
        }

        try {

            const createdProduct = await Product.create({
                product_name,
                product_image: filename,
                image_url: url,
                price,
                id_penyakit,
                id_jenisObat,
                stock,
                deskripsi,
                komposisi,
                dosis,
                aturan_pakai,
                kontra_indikasi,
                efek_samping,
                golongan_product,
                expired_product
            });

            res.status(201).json({ msg: "Produk berhasil dibuat", product: createdProduct });
        } catch (error) {
            res.status(500).json({ msg: "Terjadi kesalahan saat membuat produk" });
        }
    });
};

exports.editProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const {
            product_name,
            price,
            id_penyakit,
            id_jenisObat,
            stock,
            deskripsi,
            komposisi,
            dosis,
            aturan_pakai,
            kontra_indikasi,
            efek_samping,
            golongan_product,
            expired_product
        } = req.body;

        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ msg: 'Produk tidak ditemukan' });
        }

        // Simpan data produk sebelum diedit
        const previousImage = product.product_image;

        // Periksa apakah ada file gambar yang diunggah
        if (req.files && req.files.product_image) {
            const file = req.files.product_image;
            const timeStamp = Date.now();
            const ext = path.extname(file.name);
            const randomString = crypto.randomBytes(8).toString("hex");
            const allowedTypes = ['.png', '.jpg', '.jpeg'];

            if (!allowedTypes.includes(ext.toLowerCase())) {
                return res.status(422).json({ msg: "Jenis file gambar tidak valid. Harap unggah file gambar dengan ekstensi PNG, JPG, atau JPEG." });
            }

            if (file.size > 10 * 1024 * 1024) {
                return res.status(422).json({ msg: "Ukuran file tidak boleh lebih dari 10MB." });
            }

            const newFilename = `${timeStamp}-${randomString}${ext}`;
            const newUrl = `${req.protocol}://${req.get('host')}/obat/${newFilename}`;

            // Pindahkan file gambar baru
            file.mv(`./public/obat/${newFilename}`, (err) => {
                if (err) {
                    return res.status(500).json({ msg: "Terjadi kesalahan saat mengunggah gambar." });
                }
            });

            // Hapus file gambar sebelumnya
            fs.unlink(`./public/obat/${previousImage}`, (err) => {
                if (err) {
                    console.error("Terjadi kesalahan saat menghapus file gambar sebelumnya:", err);
                }
            });

            product.product_image = newFilename;
            product.image_url = newUrl;
        }

        product.product_name = product_name;
        product.price = price;
        product.id_penyakit = id_penyakit;
        product.id_jenisObat = id_jenisObat;
        product.stock = stock;
        product.deskripsi = deskripsi;
        product.komposisi = komposisi;
        product.dosis = dosis;
        product.aturan_pakai = aturan_pakai;
        product.kontra_indikasi = kontra_indikasi;
        product.efek_samping = efek_samping;
        product.golongan_product = golongan_product;
        product.expired_product = expired_product;

        await product.save();

        res.status(200).json({ msg: "Produk berhasil diubah.", product });
    } catch (error) {
        res.status(500).json({ msg: "Terjadi kesalahan saat mengedit produk." });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ msg: 'Produk tidak ditemukan' });
        }

        // Hapus file gambar
        fs.unlink(`./public/obat/${product.product_image}`, (err) => {
            if (err) {
                console.error("Terjadi kesalahan saat menghapus file gambar:", err);
            }
        });

        await product.destroy();
        res.status(200).json({ msg: "Produk berhasil dihapus." });
    } catch (error) {
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus produk." });
    }
};