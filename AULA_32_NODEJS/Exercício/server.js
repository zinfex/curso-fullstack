import express from "express"
import UsuariosRoutes from "./routes/UsuariosRoutes.js"

const app = express()

app.use(express.json())
app.use(UsuariosRoutes)

app.get('/', (req, res) => {
    return res.send('Servidor ON!')
})

app.listen(8000, () => {
    console.log('Executando servidor')
})