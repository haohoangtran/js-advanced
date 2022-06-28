const mongoose = require("mongoose")
const { Schema } = mongoose;
const taskSchema = new Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    actived: {
        type: Number,
        enum: [0, 1],
        default: 1
    },
    createdAt: {
        type: Number,
        default: () => Math.floor(Date.now() / 1000)
    }
});


const Task = mongoose.model('User', taskSchema);
module.exports = Task