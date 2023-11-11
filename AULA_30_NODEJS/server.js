import express from 'express';
const app = express();

app.get('/', function(request, response) {
    return response.send('Servidor node')
})

//PASSAGEM DE VALORES - PARAMETROS
app.get('/pedido/:codigo', function(request, response) {
    const codigo = request.params.codigo;
    return response.send('O código informado é ' + codigo)
})

//PASSAGEM DE VALORES - VIA QUERY
//http://localhost:3001/veiculos?marca=Chevrolet&cor=Preto
app.get('/veiculos', function(request, response) {
    const queries = request.query;
    const marca = queries.marca;
    const cor = queries.cor;
    return response.send("A Marca é " + marca + " e a cor é " + cor)
})

app.listen(3001, function() {
    console.log('Servidor rodando...')
})