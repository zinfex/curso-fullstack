import express from "express"
import UsuariosRoutes from "./routes/UsuariosRoutes.js";

const app = express();
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("Servidor funcionando")
})

app.use(UsuariosRoutes)

app.listen(8000, () => {
    console.log('Executando')
})