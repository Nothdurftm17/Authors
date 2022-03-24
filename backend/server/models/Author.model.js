const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [1, "Name must be at least 1 characters"]
    }
}, {timestamps:true})

const Author = mongoose.model("author", AuthorSchema )

module.exports = Author;