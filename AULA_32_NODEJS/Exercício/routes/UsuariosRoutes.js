import express from "express";
import UsuariosController from "../controllers/UsuariosController.js";

const UsuariosRoutes = express.Router();

const usuariosController = new UsuariosController();
UsuariosRoutes.get('/usuarios', usuariosController.findAll)
UsuariosRoutes.post('/usuarios', usuariosController.create)
UsuariosRoutes.get('/usuarios/:id', usuariosController.findOne)
UsuariosRoutes.delete('/usuarios/:id', usuariosController.delete)

export default UsuariosRoutes;