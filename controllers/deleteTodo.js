const todos = require('./createTodo/todos');

exports.deleteTodo = (req, res, next) => {
    const todoIndex = todos.findIndex((todo) =>
        todo.id = todos.body.id);

    if (todoIndex) {
        todos.splice(todoIndex, 1);
        res.status(200).redirect('/delete-todo')
    }
    res.status(404, 'Todo not found!')
}