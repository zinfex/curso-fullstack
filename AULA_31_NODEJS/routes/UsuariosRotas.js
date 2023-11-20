import express from 'express';
import Conexao from '../config/Conexao.js';

const UsuariosRotas = express.Router();

// CRUD
UsuariosRotas.get('/usuarios', function(request, response) {
    const con = new Conexao();
    const sql = "SELECT * FROM usuarios"
    const dados = {};
    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

UsuariosRotas.get('/usuarios/:id', function(request, response) {
    const con = new Conexao();
    const id = request.params.id;
    const sql = "SELECT * FROM usuarios WHERE id = "+id;
    const dados = {};
    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

// CRIAR USUARIO
UsuariosRotas.post('/usuarios', function(request, response) {
    const con = new Conexao();
    const body = request.body;
    
    // const sql = "INSERT INTO usuarios(nome, login, senha) VALUES(?,?,?)";
    // const dados = Array(body.nome, body.login, body.senha);
    const sql = "INSERT INTO usuarios SET ?";

    con.query(sql, body, function(error, resultados) {
        response.json(resultados);
    });
});

// UPDATE USUARIO
UsuariosRotas.put('/usuarios/:id', function(request, response) {
    const con = new Conexao();
    const id = request.params.id;
    const body = request.body;
    const sql = "UPDATE usuarios SET ? WHERE id = ?";
    const dados = Array(body, id);

    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

// DELETE USUARIO
UsuariosRotas.delete('/usuarios/:id', function(request, response) {
    const con = new Conexao();
    const id = request.params.id;

    const sql = "DELETE FROM usuarios WHERE id = " + id;
    const dados = {};

    con.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

export default UsuariosRotas;