require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")

//middleware
app.use(express.json())
app.use(cors())
const connection = require('./db')
connection()

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
