import Users from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refresh_token;
        if (!refreshToken) return res.sendStatus(401);

        const user = await Users.findOne({
            where: {
                refresh_token: refreshToken
            }
        });

        if (!user) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const userId = user.id_user;
            const username = user.username;
            const email = user.email;
            const accessToken = jwt.sign({ userId, username, email }, process.env.SECRET_ACCESS_TOKEN, {
                expiresIn: "15s"
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
};
