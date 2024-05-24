const TodoModel = require('../model/todoModel');

// create todo
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

// get all todos
const getTodo = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
}

// get todo by id
const getTodoById = async (req, res) => {
    try {
        const todoById = await TodoModel.findById(req.params.id);
        if(!todoById) {
            return res.status(404).send({ message: 'Todo not found' })
        }
        res.status(200).send(todoById);
    } catch (error) {
        res.status(500).send(error);
    }
}

// delete todo by id
const deleteTodoById = async (req, res) => {
    try {
        const deleteById = await TodoModel.findByIdAndDelete(req.params.id);
        if(!deleteById) {
            return res.status(404).send({ message: 'Todo not found for delete' })
        }
        res.status(200).send(deleteById);
    } catch (error) {
        res.status(500).send(error);
    }
}

// whole update todo by id
const putTodoById = async (req,res) => {
    try {
        const putById = await TodoModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if(!putById) {
            return res.status(404).send({ message: 'Todo not found for update' })
        }
        await putById.save();
        res.status(200).send(putById)
    } catch (error) {
        if(error.name = 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).send(messages);
        }
        res.status(400).send(error);
    }
}

module.exports = {
    createTodo,
    getTodo,
    getTodoById,
    deleteTodoById,
    putTodoById
};