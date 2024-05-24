const mongoose = require('mongoose');

const todo_note = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    date: {
        type: Date,
        default: Date.now
    },
    note: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean
    }
});

const Todo = mongoose.model('User', todo_note);

module.exports = Todo;

