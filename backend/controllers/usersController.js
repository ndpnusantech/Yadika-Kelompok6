const { Users } = require('../helper/relation.js')
const bcrypt = require('bcrypt')

exports.getAllUsers = async (req, res) => {
    try {
        const response = await Users.findAll()
        res.json({ msg: "Success Get All Users", response })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({ where: { id: req.params.id } })
        res.json({ msg: "Success", response })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.RegisterUser = async (req, res) => {
    const { fullname, age, username, password, no_handphone, gender, email } = req.body
    const existingUser = await Users.findOne({
        where: {
            email: email,
            username: username
        }
    });
    if (existingUser) {
        return res.status(400).json({ msg: "Email already exists" });
    }

    function generateRandomString(length) {
        const characters = process.env.CHARACTERS;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function generateRandomNumber(length) {
        const numbers = process.env.NUMBER;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return result;
    }

    const userId = `${generateRandomString(3)}-${generateRandomNumber(3)}`;

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
            email
        })
        res.status(200).json({ msg: 'Success Register', user: newUser })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { fullname, age, username, password, no_handphone, gender, email } = req.body;

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
                email
            },
            { where: { id: userId } }
        );

        const updatedUser = await Users.findOne({ where: { id: userId } });

        res.status(200).json({ msg: 'User updated successfully', user: updatedUser });
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

        res.status(200).json({ msg: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
