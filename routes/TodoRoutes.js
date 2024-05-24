const express = require('express');
const { createTodo, getTodo, getTodoById, deleteTodoById, putTodoById } = require('../controller/todoController');
const router = express.Router();

// Create a new todo
router.post('/todo', createTodo);

// Get all todos
router.get('/todo', getTodo);

// Get todo by id
router.get('/todo/:id', getTodoById);

// Delete todo by id
router.delete('/todo/:id', deleteTodoById);

// update todo by id
router.put('/todo/:id', putTodoById)

module.exports = router;