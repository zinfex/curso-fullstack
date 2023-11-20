import express from 'express'
import Conexao from './config/Conexao.js'
import UsuariosRotas from './routes/UsuariosRotas.js';
import ProdutosRotas from './routes/ProdutosRotas.js';

const app = express();

app.use(express.json());

// http://localhost:8000/
app.get('/', function(request, response) {
    return response.send("Servidor executando");
});

app.use(UsuariosRotas);
app.use(ProdutosRotas);

// PARAMS
app.get('/pedido/:cep/json', function(request, response) {
    const codigo = request.params.cep;
    return response.json({
        'logradouro': codigo,
        'tipo_lograoduro': ''   
    });
})

// QUERY
app.get('/queries', function(request, response) {
    const queries = request.query;
    return response.json(queries);
})

// BODY
app.post('/criar-usuario', function(request, response) {
    const body = request.body;
    return response.json(body);
});


app.post('/vender', function(request, response) {
    const con = new Conexao();
    const body = request.body;
    
    // TRANSACAO
    // CONEXAO COM BANCO
    // VEJO SE O PRODUTO TEM EM ESTOQUE NO BANCO
    // REDUZO A QUANTIDADE DO BANCO
    // EMITO A NFe PELA SEFAZ
    // EU ENVIO UM POST PARA SEFAZ
    // GRAVO NO BANCO A COMISSAO DO VENDEDOR
    // GRAVO NO BANCO A PONTUACAO DO CLIENTE
    // ENVIO RESPOSTA PARA O FRONTEND
    
});



app.listen(8000, function() {
    console.log("Servidor executando...");
});