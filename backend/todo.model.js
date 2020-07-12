const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser: true});

const todoSchema = new mongoose.Schema({
    todo_description: String,
    todo_responsible: String,
    todo_priority: String,
    todo_completed: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);
