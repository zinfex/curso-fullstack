// FAZER A CONEXAO COM BANCO DE DADOS
import mysql from 'mysql';

class Conexao {
    constructor () {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'ads'
        });
    }

    // metodo = funcao
    query(sql, dados, callback) {
        this.connection.connect();
        this.connection.query(sql, dados, callback)
        this.connection.end();
    }
}

// const con = new Conexao();
// con.query("SELECT * FROM usuarios", {}, function(status, resultado) {
//     if(status) {
//         console.log("Erro de Consulta");
//     }
//     console.log(resultado);
// });

export default Conexao;