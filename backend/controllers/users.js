import Users from "../models/userModel.js";
import bcrypt from 'bcrypt'

export const getUser = async (req, res) => {
    try {
        const response = await Users.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                id_user: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const register = async (req, res) => {
    const { fullname, age, username, no_handphone, email, password, gender } = req.body;

    const existingUser = await Users.findOne({
        where: {
            email: email
        }
    });
    if (existingUser) {
        return res.status(400).json({ msg: "Email already exists" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Users.create({
            fullname: fullname,
            age: age,
            username: username,
            no_handphone: no_handphone,
            email: email,
            password: hashedPassword,
            gender: gender
        });

        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Failed to register user" });
    }
};

export const updateUser = async (req, res) => {
    const user = await Users.findOne({
        where: {
            id_user: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User Not Found" });
    const { fullname, age, username, no_handphone, email, password, confirmPassword, gender } = req.body;
    let hashPassword;
    if (password === "" || password === null) {
        hashPassword = user.password;
    } else {
        hashPassword = await bcrypt.hash(password, 10);
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Password and confirm password do not match" });
    }

    try {
        await Users.update(
            {
                fullname: fullname,
                age: age,
                username: username,
                no_handphone: no_handphone,
                email: email,
                password: hashPassword,
                gender: gender
            },
            {
                where: {
                    id_user: user.id_user
                }
            }
        );
        res.status(200).json({ msg: "Updated!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const user = await Users.findOne({
        where: {
            id_user: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User Not Found" });

    try {
        await Users.destroy({
            where: {
                id_user: user.id_user
            }
        });
        res.status(200).json({ msg: "Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
