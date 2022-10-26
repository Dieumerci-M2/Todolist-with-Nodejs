const express = require('express');

const todosRouter = require('./routes/todos.routes');

const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(todosRouter);

app.listen(9000)