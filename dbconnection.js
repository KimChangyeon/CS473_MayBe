const mysql = require('mysql');
const connection = mysql.createPool({
host: '15.164.93.169',
port: 3306,
user: 'root',
password: '0000',
database: 'MayBe',
multipleStatements: true,
});

module.exports=connection;