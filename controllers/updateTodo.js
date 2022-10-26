const todo = require('./createTodo')

exports.updateTodo = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
        todo.todos.splice(id, 1, req.body.title)
        console.log(todo.todos);
        res.status(201).redirect('/')
	}catch (error){
        console.log(error);
    }
};
