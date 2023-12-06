import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
import UsuariosModel from "../models/UsuariosModels.js";

dotenv.config()

class AuthController {

    async Login(req, res) {
        try {
            const SECRET = process.env.SECRET
    
            const model = new UsuariosModel()
    
            const data = await model.login(req.body.login, req.body.senha)
    
            if(data[0] !== undefined) {
                const usuario = data[0]
                const dataUsuario = {
                    id: usuario.id,
                    login: usuario.login
                }
                const token = jwt.sign(dataUsuario, SECRET)
                
                
                res.status(200).json({
                    statusCode: 200,
                    message: 'Login realizado com sucesso',
                    data: {
                        token
                    }
                })
            } else {
                res.status(500).json({
                statusCode: 500,
                message: 'Login ou senha inválida'
                })
            }
    
        } catch(error) {
            console.log(error)
            res.status(500).json({
            statusCode: 500,
            message: error.message
            })
        }
    }
}

export default AuthController;