const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, " back Author's name must be longer than 3 characters"],
        minLength:[3," back Author's name must be greater than 3 characters"]
    }
}, {timestamps:true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
