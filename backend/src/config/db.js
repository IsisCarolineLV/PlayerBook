const {Pool} = require('pg');
require('dotenv').config(); //le o .env

const pool =  new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

pool.connect()
    .then(()=> console.log('Conectado no Postgres uhulll'))
    .catch(err => console.error ('Erro ao conectar ao banco', err.stack));

module.exports = pool;