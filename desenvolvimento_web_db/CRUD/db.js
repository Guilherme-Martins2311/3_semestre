const mysql = require('mysql2');

//criar os parametros de conexão (credenciais)
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'catolica',
    database: 'userdb_guilhermemartins',
    port: '3307'
});

//estabelecer a conexão com o banco
db.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
});

module.exports = db;