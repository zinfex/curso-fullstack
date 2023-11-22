import express from "express";
import Conexao from "../config/Conexao.js";

const RotaProdutos = express.Router()

RotaProdutos.get('/produtos-api', (req, res) => {
    const con = new Conexao();
    const sql = 'SELECT * FROM produtos'
    const dados = {}
    con.query(sql, dados, (err, resultado) => {
        res.json(resultado)
    })
})

RotaProdutos.post('/produtos-api', (req ,res) => {
    const con = new Conexao();
    const body  = req.body

    const sql = 'INSERT INTO produtos SET ?'

    con.query(sql, body, (err, resultado) => {
        res.json(resultado)
    })
})

export default RotaProdutos;