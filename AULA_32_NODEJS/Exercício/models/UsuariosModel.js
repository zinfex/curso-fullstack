import Conexao from "../config/Conexao.js";

class UsuariosModel {
    
    async findAll() {
        const con = new Conexao();
        const sql = "SELECT * FROM usuarios";
        const dados = {};
        const resultados = await con.query(sql, dados)
        return resultados
    }

    async create(data) {
        const con = new Conexao();
        const sql = "INSERT INTO usuarios SET ?"
        const dados = data
        const resultados = await con.query(sql, dados)
        return resultados
    }

}

export default UsuariosModel;