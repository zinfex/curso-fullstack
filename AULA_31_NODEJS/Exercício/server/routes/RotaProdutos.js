import express from "express";
import Conexao from "../config/Conexao.js";

const RotaProdutos = express.Router()

RotaProdutos.get('/produtos', (req, res) => {
    const con = new Conexao();
    const sql = 'SELECT * FROM produtos'
    const dados = {}
    con.query(sql, dados, (err, resultado) => {
        res.json(resultado)
    })
})

export default RotaProdutos;