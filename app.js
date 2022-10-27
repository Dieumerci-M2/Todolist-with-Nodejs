const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { Pool } = require('pg');

const pool = require('./db/pool');

const todosRouter = require('./routes/todos.routes');

const app = express();


//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(todosRouter);

app.listen(9010, () =>
	console.log(`app listening on Port http://localhost:9000`)
);
