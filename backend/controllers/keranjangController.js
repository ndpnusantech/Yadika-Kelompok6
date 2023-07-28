const { Keranjang, Product } = require("../helper/relation.js");
const jwt = require("jsonwebtoken");

exports.getAllkeranjang = async (req, res) => {
  try {
    const response = await Keranjang.findAll({
      include: { model: Product, as: "products", association: "products" },
    });
    res.status(200).json({ msg: "Success", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getKeranjangById = async (req, res) => {
  try {
    const response = await Keranjang.findOne({
      where: { id: req.params.id },
      include: { model: Product, as: "products", association: "products" },
    });
    res.status(200).json({ msg: "success", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.createKeranjang = async (req, res) => {
  const { id_product, qty } = req.body;

  const selectedProduct = await Product.findOne({ where: { id: id_product } });
  const hargaTotal = selectedProduct.price * qty;

  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
    const id_user = decodedToken.userId;

    const keranjang = await Keranjang.create({
      id_product,
      id_user,
      qty,
      total_harga: hargaTotal,
    });

    res.status(200).json({ msg: "success", keranjang });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ msg: "Token sudah kedaluwarsa. Harap login kembali." });
    } else {
      res.status(500).json({ msg: error.message });
    }
  }
};

