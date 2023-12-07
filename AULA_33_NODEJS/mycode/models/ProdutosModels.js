import Conexao from "../config/connect.js";

class ProdutosModel {

    async findAll() {
        const con = new Conexao()
        return await con.query("SELECT * FROM produtos", [])
    }

    async findOne(id) {
        const con = new Conexao()
        return await con.query("SELECT * FROM produtos WHERE id = "+id, [])
    }

    async create(data) {
        const con = new Conexao()
        return await con.query("INSERT INTO produtos SET ?", data)
    }

    async delete(id) {
        const con = new Conexao()
        return await con.query("DELETE FROM produtos WHERE id = "+id, [])
    }

}

export default ProdutosModel