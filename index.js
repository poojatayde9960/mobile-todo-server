const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/todos", require("./routes/todo.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resourse Not Founed" })
})
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "server error ", err: err.message })
})

mongoose.connection.once("open", (req, res) => {
    console.log("MONGOOSE CONNECT SUCCESS")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})