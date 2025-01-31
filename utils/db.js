const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'joga_mysql'
})

connection.connect((err) => {
    if (err) throw err
    console.log('mysql is connnected')
})

module.exports = connection