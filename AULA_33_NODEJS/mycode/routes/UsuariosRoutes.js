import express from 'express'
import UsuariosController from "../controllers/UsuariosControllers.js";
import AuthController from '../controllers/authController.js';

const UsuariosRoutes = express.Router()

const usuariosController = new UsuariosController()
UsuariosRoutes.get('/usuarios', usuariosController.findAll)
UsuariosRoutes.get('/usuarios/:id', usuariosController.findOne)
UsuariosRoutes.post('/usuarios', usuariosController.create)
UsuariosRoutes.delete('/usuarios/:id', usuariosController.delete)

const authController = new AuthController()
UsuariosRoutes.post('/usuarios/login', authController.Login)

export default UsuariosRoutes;