import express from "express";
import PublicRoutes from "./routes/PublicRoutes.js";
import PrivateRoutes from "./routes/PrivateRoutes.js";

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Servidor aberto')
})

app.use(PublicRoutes)
app.use(PrivateRoutes)


app.listen(8000, () => {
    console.log('Servidor executando')
})