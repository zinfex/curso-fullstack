import mysql from 'mysql';

class Conexao {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'exnode31'
        })
    }

    query(sql, dados, callback) {
        this.connection.connect();
        this.connection.query(sql, dados, callback)
        this.connection.end();
    }
}

export default Conexao;