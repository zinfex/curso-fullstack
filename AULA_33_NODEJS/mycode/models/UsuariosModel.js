import Conexao from "../config/connect.js";

class UsuariosModel {
    async findAll() {
        const con = new Conexao();
        return await con.query("SELECT * FROM usuarios", []) 
    }

    async findOne(id) {
        const con = new Conexao();
        return await con.query("SELECT * FROM usuarios WHERE id = "+id, [])
    }

    async findLogin(login) {
        const con = new Conexao();
        return await con.query(`SELECT * FROM usuarios WHERE login = '${login}'`, [])
    }

    async create(data) {
        const con = new Conexao();
        const dados = data
        return await con.query("INSERT INTO usuarios SET ?;", dados)
    }

    async delete(id) {
        const con = new Conexao();
        return await con.query("DELETE FROM usuarios WHERE id = "+id, [])
    }
}

export default UsuariosModel;