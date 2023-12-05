import express from "express";
import UsuariosController from "../controllers/UsuariosController.js";
import authController from "../controllers/authController.js";

const UsuariosRoutes = express.Router()

const usuariosController = new UsuariosController()
UsuariosRoutes.get('/usuarios', usuariosController.findAll)
UsuariosRoutes.get('/usuarios/:id', usuariosController.findOne)
UsuariosRoutes.post('/usuarios', usuariosController.create)
UsuariosRoutes.delete('/usuarios/:id', usuariosController.delete)

UsuariosRoutes.post('/usuarios/login', authController.login)

export default UsuariosRoutes;