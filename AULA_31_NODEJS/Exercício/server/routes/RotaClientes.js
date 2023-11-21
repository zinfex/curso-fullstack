import express from "express";
import Conexao from "../config/Conexao.js";

const RotaClientes = express.Router()

RotaClientes.get('/clientes', (req, res) => {
    const con = new Conexao();
    const sql = 'SELECT * FROM clientes'
    const dados = {}
    con.query(sql, dados, (err, resultado) => {
        res.json(resultado)
    })
})

export default RotaClientes;