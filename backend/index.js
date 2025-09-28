const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const connectDb = require('./db/db')
connectDb()

const userRoute = require('./router/userRoute')

app.use(express.json())
app.use(cors("*"))


//Routes

app.use('/user',userRoute)

app.listen("5200",() => {
    console.log("Server is listening to port 5200")
})