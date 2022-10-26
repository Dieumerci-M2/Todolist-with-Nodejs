const todo = require('./createTodo/todos')

exports.updateTodo = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
        todo.update(req.body, {
            where: {id : id}
        })
		 .then(post => {
                const index = todo.findIndex(p => p.id == post.id)
                todo[index] = { ...id }
                
        })
	}catch (error){
        console.log(error);
    }
};