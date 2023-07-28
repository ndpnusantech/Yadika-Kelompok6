const { Users } = require("../helper/relation.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.json({ msg: "Success Get All Users", response });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const response = await Users.findOne({ where: { id: req.params.id } });
    res.json({ msg: "Success", response });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.RegisterUser = async (req, res) => {
  const {
    fullname,
    age,
    username,
    password,
    confirmPassword,
    no_handphone,
    gender,
    email,
  } = req.body;
  const existingUSN = await Users.findOne({ where: { username: username } });
  const existingEmail = await Users.findOne({ where: { email: email } });
  if (existingUSN) {
    return res.status(400).json({ msg: "Username already exists" });
  }
  if (existingEmail) {
    return res.status(400).json({ msg: "Email already exists" });
  }
  if (password != confirmPassword) {
    return res.status(400).json({ msg: "Password not match" });
  }

  async function generateUniqueUserId(length) {
    const characters = process.env.CHARACTERS_AND_NUMBER;
    let userId = "";
    let isUnique = false;

    while (!isUnique) {
      // Generate random userId
      for (let i = 0; i < length; i++) {
        userId += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      // cek id user
      const existingUser = await Users.findOne({
        where: { id: `uid-${userId}` },
      });
      if (!existingUser) {
        isUnique = true; // Jika userId belum digunakan, keluar dari loop
      } else {
        userId = ""; // Jika userId sudah digunakan, reset nilai userId dan ulangi proses
      }
    }

    return `uid-${userId}`;
  }

  const userId = await generateUniqueUserId(3);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      id: userId,
      fullname,
      age,
      username,
      password: hashedPassword,
      no_handphone,
      gender,
      email,
    });
    res.status(200).json({ msg: "Success Register", user: newUser });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.LoginUser = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password !" });
    const userId = user[0].id;
    const email = user[0].email;
    const username = user[0].username;
    const accessToken = jwt.sign(
      { userId, email, username },
      process.env.SECRET_ACCESS_TOKEN,
      {
        expiresIn: "2m",
      }
    );
    const refreshToken = jwt.sign(
      { userId, email, username },
      process.env.SECRET_REFRESH_TOKEN,
      {
        expiresIn: "2m",
      }
    );

    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email Not Found !" });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
    const userId = decodedToken.userId;

    // Hapus refresh token dari database
    await Users.update(
      { refresh_token: null },
      {
        where: {
          id: userId,
        },
      }
    );

    // Hapus cookie refreshToken
    res.clearCookie("refreshToken");

    res.json({ msg: "Logout berhasil" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { fullname, age, username, password, no_handphone, gender, email } =
    req.body;

  try {
    // cek id
    const existingUser = await Users.findOne({ where: { id: userId } });
    if (!existingUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Lakukan update data pengguna berdasarkan ID yang diberikan
    await Users.update(
      {
        fullname,
        age,
        username,
        password: hashedPassword, // Update password jika password diisi, jika tidak, tetap gunakan password lama
        no_handphone,
        gender,
        email,
      },
      { where: { id: userId } }
    );

    const updatedUser = await Users.findOne({ where: { id: userId } });

    res
      .status(200)
      .json({ msg: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    // cek id
    const existingUser = await Users.findOne({ where: { id: userId } });
    if (!existingUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Hapus data pengguna berdasarkan ID
    await Users.destroy({ where: { id: userId } });

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
