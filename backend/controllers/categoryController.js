const { Category_penyakit, Category_jenisObat } = require('../helper/relation.js');


exports.getCatePenyakit = async (req, res) => {
    try {
        const response = await Category_penyakit.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.getJenisObat = async (req, res) => {
    try {
        const response = await Category_jenisObat.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


exports.createCatePenyakit = async (req, res) => {
    try {
        const { penyakit } = req.body;

        const categoryPenyakit = await Category_penyakit.create({
            penyakit: penyakit
        });

        res.status(201).json({ msg: "Kategori penyakit berhasil dibuat", response: categoryPenyakit });
    } catch (error) {
        res.status(500).json({ msg: "Terjadi kesalahan saat membuat kategori penyakit" });
    }
};

exports.createJenisObat = async (req, res) => {
    try {
        const { jenisObat } = req.body;

        const categoryJenisObat = await Category_jenisObat.create({
            jenisObat: jenisObat
        });

        res.status(201).json({ msg: "Kategori jenis obat berhasil dibuat", response: categoryJenisObat });
    } catch (error) {
        res.status(500).json({ msg: "Terjadi kesalahan saat membuat kategori jenis obat" });
    }
};
