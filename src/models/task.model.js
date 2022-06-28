const mongoose = require("mongoose")
const { Schema } = mongoose;
const taskSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
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


const Task = mongoose.model('Task', taskSchema);
module.exports = Task