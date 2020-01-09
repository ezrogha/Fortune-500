const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Fortune-500',
    password: 'Fortune-500'
})

module.exports = pool.promise()
