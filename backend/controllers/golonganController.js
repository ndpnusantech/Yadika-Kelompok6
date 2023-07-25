const { GolonganObat } = require('../helper/relation.js')

exports.getAllGolongan = async (req, res) => {
    try {
        const response = await GolonganObat.findAll()
        res.status(200).json({ msg: "success", response })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.getGolonganById = async (req, res) => {
    try {
        const response = await GolonganObat.findOne({ where: { id: req.params.id } })
        res.status(200).json({ msg: "success", response })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.createGolongan = async (req, res) => {
    try {
        const { golonganObat } = req.body

        const response = await GolonganObat.create({
            golonganObat
        })
        res.status(200).json({ msg: "created", response })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.deleteGolongan = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedGolongan = await GolonganObat.destroy({ where: { id } });
        if (deletedGolongan === 0) {
            return res.status(404).json({ msg: "Data tidak ditemukan" });
        }

        res.status(200).json({ msg: "Berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.updateGolongan = async (req, res) => {
    try {
        const { id } = req.params;
        const { golonganObat } = req.body;

        const updatedGolongan = await GolonganObat.update(
            { golonganObat },
            { where: { id } }
        );

        if (updatedGolongan[0] === 0) {
            return res.status(404).json({ msg: "Data tidak ditemukan" });
        }

        res.status(200).json({ msg: "updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
