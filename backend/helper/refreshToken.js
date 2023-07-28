const { Users } = require("./relation.js");

exports.refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken,
            },
        });
        if (!user) return res.sendStatus(403);
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decode) => {
                if (err) return res.sendStatus(403);
                const userId = user[0].id;
                const email = user[0].email;
                const username = user[0].username;
                const accessToken = jwt.sign(
                    { userId, email, username },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: "15s",
                    }
                );
                res.json({ accessToken });
            }
        );
    } catch (error) {
        console.log(error);
    }
};
