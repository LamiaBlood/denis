const { Pool } = require('pg');

const pool = new Pool({
    user: 'username',
    host: 'localhost',
    database: 'lamia',
    password: '2250',
    port: 5432,
});

module.exports = pool;
