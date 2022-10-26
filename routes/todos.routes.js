const express = require('express');

const createTodo = require('../controllers/createTodo');
const readTodo = require('../controllers/readTodo');
const updateTodo = require('../controllers/updateTodo');
const deleteTodo = require('../controllers/deleteTodo');

const router = express.Router()

router.post('/add-todo', createTodo.createTodo);

router.get('/', readTodo.getAllTodos);

router.get('/:id', readTodo.get0neTodos);

router.put('/edit-todo/:id', updateTodo.updateTodo);

router.delete('/delete-todo/:id', deleteTodo.deleteTodo);

module.exports = router;