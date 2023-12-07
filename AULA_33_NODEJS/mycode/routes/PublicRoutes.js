import express from 'express'
import AuthController from '../controllers/authController.js'
import UsuariosController from '../controllers/UsuariosControllers.js'

const PublicRoutes = express.Router()

const authController = new AuthController()
PublicRoutes.post('/usuarios/login', authController.Login)

const usuariosController = new UsuariosController()
PublicRoutes.post('/usuarios', usuariosController.create)

export default PublicRoutes