const mongoose = require('mongoose');

const todo_note = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minlength: 3
    },
    date: {
        type: Date,
        default: Date.now
    },
    note: {
        type: String,
        require: true,
    },
    done: {
        type: Boolean
    }
});

const Todo = mongoose.model('User', todo_note);

module.exports = Todo;

