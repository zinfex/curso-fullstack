import express from 'express';
import Conexao from '../config/Conexao.js';

const ProdutosRotas = express.Router();

// CRUD
ProdutosRotas.get('/produtos', function(request, response) {
    const con = new Conexao();
    const sql = "SELECT * FROM produtos"
    const dados = {};
    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

ProdutosRotas.get('/produtos/:id', function(request, response) {
    const con = new Conexao();
    const id = request.params.id;
    const sql = "SELECT * FROM produtos WHERE id = "+id;
    const dados = {};
    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

// CRIAR USUARIO
ProdutosRotas.post('/produtos', function(request, response) {
    const con = new Conexao();
    const body = request.body;
    
    // const sql = "INSERT INTO usuarios(nome, login, senha) VALUES(?,?,?)";
    // const dados = Array(body.nome, body.login, body.senha);
    const sql = "INSERT INTO produtos SET ?";

    con.query(sql, body, function(error, resultados) {
        response.json(resultados);
    });
});

// UPDATE USUARIO
ProdutosRotas.put('/produtos/:id', function(request, response) {
    const con = new Conexao();
    const id = request.params.id;
    const body = request.body;
    const sql = "UPDATE produtos SET ? WHERE id = ?";
    const dados = Array(body, id);

    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

// DELETE USUARIO
ProdutosRotas.delete('/produtos/:id', function(request, response) {
    const con = new Conexao();
    const id = request.params.id;

    const sql = "DELETE FROM produtos WHERE id = " + id;
    const dados = {};

    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

export default ProdutosRotas;