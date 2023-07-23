const { Keranjang } = require('../helper/relation.js')

exports.getAllkeranjang = async (req, res) => {
    try {
        const response = await Keranjang.findAll()
        res.status(200).json({ msg: "Success", response })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}