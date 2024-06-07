const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    complete: { type: Number },
})

module.exports = mongoose.model("todo", todoSchema) 