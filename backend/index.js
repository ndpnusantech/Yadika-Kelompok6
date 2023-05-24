import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/database.js';
import SequelizeStore from 'connect-session-sequelize'
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import authRoute from './routes/authRoute.js'

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
    db: db
})
// const database = async () => {
//     await db.sync();
// }
// database();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(authRoute)

// store.sync()

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running');
    console.log(`Listening on port ${process.env.APP_PORT}`);
});
