
const mongoose = require ("mongoose");
const petSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    group: {
        type: String,
        enum: ["mammal","bird","fish","reptile"]
    },
    type:{
        type: String
    },
    description:{
        type: String
    },
    adopted:{
        type: Boolean,
        default : "false"
    },
    owner:{
        name: {
            type: String,
            default: "none"
        },
        address:{
            type: String
        }
    },
    image:{
        type: String
    }

});

module.exports = mongoose.model("Pet", petSchema);