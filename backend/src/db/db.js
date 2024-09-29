const { Pool } = require('pg');
require("dotenv").config({ path: "./.env" });

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.NAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  
});
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Conexión exitosa a la base de datos');
  release();
});

module.exports = pool;