const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'expressproject',
    password: 'Atharv08112002'
});

module.exports = pool.promise();