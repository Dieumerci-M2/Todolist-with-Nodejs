const { Pool } = require('pg');

const connectionString = require('../config/connectionString');

const pool = new Pool({ connectionString });
pool.connect((err) => console.log('connected'))
console.log(connectionString);
module.exports = pool;