import Conexao from "../config/connect.js";


class UsuariosModel {
    
    async login(login, senha) {
        const con = new Conexao();
        return await con.query("SELECT * FROM usuarios WHERE login = ? AND senha = ?", [login, senha])
    }

    async findAll() {
        const con = new Conexao()
        return await con.query("SELECT * FROM usuarios", [])
    }

    async findOne(id) {
        const con = new Conexao()
        return await con.query("SELECT * FROM usuarios WHERE id = "+id, [])
    }

    async create(data) {
        const con = new Conexao()
        return await con.query("INSERT INTO usuarios SET ?", data)
    }

    async delete(id) {
        const con = new Conexao()
        return await con.query("DELETE FROM usuarios WHERE id = "+id, [])
    }

}

export default UsuariosModel