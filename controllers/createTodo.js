const todos = [];

const createTodo = (req, res, next) => {
    todos.push(req.body.title);
    console.log(todos);
    res.status(201).redirect('/');
}

module.exports = {
    todos,
    createTodo
}