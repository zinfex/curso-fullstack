import express from "express";
import RotaProdutos from "./routes/RotaProdutos.js";
import RotaClientes from "./routes/RotaClientes.js";

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    return res.send('Servidor funcionando')
})

app.use(RotaProdutos)
app.use(RotaClientes)

app.listen(8000, () => {
    console.log('executando servidor')
})