import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";

export const login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "User Not Registered" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });

    const id_user = user.id_user;
    const username = user.username;
    const email = user.email;

    const accessToken = jwt.sign({ id_user, username, email }, process.env.SECRET_ACCESS_TOKEN, {
        expiresIn: "20s"
    });
    const refreshToken = jwt.sign({ id_user, username, email }, process.env.SECRET_REFRESH_TOKEN, {
        expiresIn: "1d"
    });

    await User.update({ refresh_token: refreshToken }, {
        where: {
            id_user: id_user
        }
    });
    res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        maxAge: 360000
    });
    res.json({ access_token: accessToken });
};



// export const isLogin = async (req, res) => {
//     const refreshToken = req.cookies.refresh_token;

//     if (!refreshToken) {
//         return res.status(401).json({ msg: "Mohon login ke akun anda" });
//     }

//     try {
//         const decoded = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
//         const { id_user } = decoded;

//         const user = await User.findOne({
//             attributes: ['id_user', 'fullname', 'email', 'gender'],
//             where: {
//                 id_user: id_user
//             }
//         });

//         if (!user) {
//             return res.status(404).json({ msg: "User Not Registered" });
//         }

//         res.status(200).json({ user });
//     } catch (err) {
//         return res.status(401).json({ msg: "Mohon login ke akun anda" });
//     }
// };




export const logout = async (req, res) => {
    const refreshToken = req.cookies.refresh_token
    if (!refreshToken) return res.sendStatus(204)
    const user = await Users.findOne({
        where: {
            refresh_token: refreshToken
        }
    })

    if (!user) return res.sensStatus(204)
    const userId = user.id_user
    await Users.update({ refreshToken: null }, {
        where: {
            id: userId
        }
    })
    res.clearCookie('refresh_token')
    return res.sendStatus(200)
};
