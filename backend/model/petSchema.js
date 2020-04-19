
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
        enum: ["mammal","bird","fish","reptiles"]
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
    owner:[{
        Name: {
            type: String,
            default: "none"
        },
        Address:{
            type: String
        }
    }]
});

module.exports = mongoose.model("Pet", petSchema);