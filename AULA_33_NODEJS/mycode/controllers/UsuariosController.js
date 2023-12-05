import UsuariosModel from "../models/UsuariosModel.js";
import bcrypt from 'bcrypt'

class UsuariosController {
    async findAll(req, res) {
        const model = new UsuariosModel()
        const data = await model.findAll()
        return res.json(data)
    }

    async findOne(req, res) {
        const id = req.params.id
        const model = new UsuariosModel()
        const data = await model.findOne(id)
        return res.json(data)
    }

    async create(req, res) {
        const model = new UsuariosModel()
        let hashpassword = bcrypt.hashSync(req.body.senha, 10)
        const data = await model.create({login: req.body.login, senha: hashpassword})
        return res.json(data)
    }

    async delete(req, res) {
        const id = req.params.id
        const model = new UsuariosModel()
        const data = await model.delete(id)
        return res.json(data)
    }
}

export default UsuariosController;