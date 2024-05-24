const TodoModel = require('../model/todoModel');


const createTodo = async (req, res) => {
    try {

        const todo = new TodoModel(req.body);
        await todo.save();
        res.status(201).send(todo)

    } catch (error) {
        if(error.name = 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).send(messages);
        }
        res.status(400).send(error);
    }
}

const getTodo = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createTodo,
    getTodo
};