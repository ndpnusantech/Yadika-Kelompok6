import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "User Not Registered" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });

    req.session.id_user = user.id_user;
    const { id_user, fullname, email, gender } = user;

    res.status(200).json({ id_user, fullname, email, gender });
};

export const me = async (req, res) => {
    if (!req.session.id_user) {
        return res.status(401).json({ msg: "Mohon login ke akun anda" });
    }

    const user = await User.findOne({
        attributes: ['id_user', 'fullname', 'email', 'gender'],
        where: {
            id_user: req.session.id_user
        }
    });

    if (!user) return res.status(404).json({ msg: "User Not Registered" });

    res.status(200).json(user);
};

export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
        res.status(200).json({ msg: "Anda Telah Logout" });
    });
};