const express = require('express');
const { createTodo, getTodo } = require('../controller/todoController');
const router = express.Router();

// Create a new todo
router.post('/todo', createTodo);

// Get all todos
router.get('/todo', getTodo);

module.exports = router;