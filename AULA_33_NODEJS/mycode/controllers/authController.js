import UsuariosModel from "../models/UsuariosModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

dotenv.config()

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try {
        
        const usuariosModel = new UsuariosModel()
        
        usuariosModel.findLogin(req.body.login)
            // , (error, usuario) => {
            
            // if(error) {
            //     console.log(error)
            //     return res.status(401).json({
            //         statusCode: 401,
            //         message: 'não autorizado',
            //         data: {
            //             login: req.body.login
            //         }

            //     })
            // }

            // if(!usuario){
            //     res.status(401).json({
            //         statusCode: 401,
            //         message: 'usuário não encontrado',
            //         data: {
            //             login: req.body.login
            //         }
            //     })
            // }

            const validacaoPassword = bcrypt.compareSync(req.body.senha, usuario.senha)

            if (!validacaoPassword) {
                res.status(401).json({
                    statusCode: 401,
                    message: 'não autorizado',
                    data: {
                        login: login
                    }
                })
            }

            const dataUsuario = {
                id: req.body.id,
                login: req.body.login,
            };
            const token = jwt.sign(dataUsuario, SECRET)
            
            
            res.status(200).json({
                statusCode: 200,
                message: 'Login realizado com sucesso',
                data: {
                    token
                }
            })
        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

export default {
    login
}