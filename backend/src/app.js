require("dotenv").config()

const express = require("express")
const app = express()

const bodyParser = require("body-parser")

const mongoose = require("mongoose")
const cors = require("cors")

const Post = require("./routes/postController")

//Configs
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(cors())

mongoose.connect(
    process.env.MONGO_URL='mongodb+srv://api_pet:123456jv@cluster0.v4fnoqw.mongodb.net/?retryWrites=true&w=majority',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/post", Post)

app.listen(process.env.PORT || 3001, () => console.log("Server running..."))