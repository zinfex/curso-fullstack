import express from "express";
import UsuariosRoutes from "./routes/UsuariosRoutes.js";

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Servidor aberto')
})

app.use(UsuariosRoutes)

app.listen(8000, () => {
    console.log('Servidor executando')
})