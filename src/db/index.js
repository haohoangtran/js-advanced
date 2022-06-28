const connectionString = 'mongodb+srv://haoht:hao123@cluster0.l6ggs.mongodb.net/todo?retryWrites=true&w=majority'
const mongoose = require('mongoose');
const { Schema } = mongoose
mongoose.connect(connectionString);
console.log("connected db")
module.exports = {}