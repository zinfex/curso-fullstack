import express from "express";
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import ProdutosRoutes from "./UsuariosRoutes.js";
import UsuariosRoutes from "./ProdutosRoutes.js";

dotenv.config()
const SECRET = process.env.SECRET

const PrivateRoutes = express.Router()

PrivateRoutes.use(function(req, res, next) {
    let logged = false
    const token = req.headers.token

    if(token) {
        try {
            const tokenDecifrado = jwt.verify(token, SECRET)
            if(tokenDecifrado) {
                logged = true
            } 
        } catch(e) {    
            return res.json(e)
        }
        if(logged = false) {
            return res.json({message: 'Token inválido'})
        }
        next()
    }
})

PrivateRoutes.use(UsuariosRoutes)
PrivateRoutes.use(ProdutosRoutes)

export default PrivateRoutes