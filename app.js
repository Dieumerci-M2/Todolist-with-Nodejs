const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const todosRouter = require('./routes/todos.routes');

const app = express();


//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(todosRouter);

app.listen(9000, () =>
	console.log(`app listening on Port http://localhost:9000`)
);
