const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, " (back) Pirate's name must be longer than 3 characters"],
        minLength:[3," (back) Pirate's name must be greater than 3 characters"]
    },
    url:{
        type:String
    },
    treasure:{
        type:Number,
        required:[true, "Treasure chests must not be empty"],
        min: [0, "Treasure chests must not be empty"]
    },
    phrase:{
        type:String,
        required:[true, "Enter a catch phrase!" ],
        minLength:[0, "Enter a catch phrase!"]
    },
    position:{
        type:String
    },
    pegleg:{
        type:Boolean
    },
    eyepatch:{
        type:Boolean
    },
    hookhand:{
        type:Boolean
    }

}, {timestamps:true});

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;
