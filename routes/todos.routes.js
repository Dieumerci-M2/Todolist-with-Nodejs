const express = require('express');

const createTodo = require('../controllers/createTodo');
// const readTodo = require('../controllers/readTodo');
// const updateTodo = require('../controllers/updateTodo');
// const deleteTodo = require('../controllers/deleteTodo');

const router = express.Router()

router.post('/add-todo', createTodo.createTodo);

// router.get('/', readTodo.readAllTodos);

// router.get('/:id', readTodo.readOneTodos);

// router.put('/edit-todo', updateTodo.updateTodo);

// router.delete('/delete-todo', deleteTodo.deleteTodo);

module.exports = router;