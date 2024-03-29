const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const productRoute = require('./routes/productRoute.js')
const categoryRoute = require('./routes/categoryRoute.js')
const golonganRoute = require('./routes/golonganRoute.js')
const keranjangRoute = require('./routes/keranjangRoute.js')
const usersRoute = require('./routes/usersRoute.js')

const app = express()

dotenv.config()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))

// Route
app.use(productRoute)
app.use(categoryRoute)
app.use(golonganRoute)
app.use(keranjangRoute)
app.use(usersRoute)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})