const todo = require('./createTodo/todos')

exports.updateTodo = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
        todo.update(req.body, {
            where: {id : id}
        })
		 .then(post => {
                const index = todo.findIndex(id)
                todo[index] = { ...id }
                res.status(201).redirect('/')
                
        })
	}catch (error){
        console.log(error);
    }
};

// todos.push(req.body.title);
// console.log(todos);
// res.status(201).redirect('/');