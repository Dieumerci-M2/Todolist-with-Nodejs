const todos = require('./createTodo');

exports.deleteTodo = (req, res, next) => {
    const todoIndex = parseInt(req.params.id);

    todos.todos.splice(todoIndex, 1);
    res.status(200).redirect('/');
}