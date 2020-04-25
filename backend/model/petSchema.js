//mongoose schema 
const mongoose = require ("mongoose");
const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    group: {
        type: String,
        enum: ["mammal","bird","fish","reptile"],
        required: true
    },
    type:{
        type: String,
        required: true
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
    }
});

module.exports = mongoose.model("Pet", petSchema);