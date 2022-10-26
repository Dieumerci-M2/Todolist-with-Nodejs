const todos = require('../controllers/createTodo')
const todosTab = todos.todos;

exports.getAllTodos = (req, res, next) => {
    res.json(todosTab)
}

exports.get0neTodos = (req, res, next) => {
    const id = req.params.id
    res.json(todosTab[id])
}

