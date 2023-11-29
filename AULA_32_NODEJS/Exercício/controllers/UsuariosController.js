import UsuariosModel from "../models/UsuariosModel.js";

class UsuariosController {
    
    async findAll(req, res) {
        const model = new UsuariosModel();
        const data = await model.findAll();
        return res.json(data)
    }

    async create(req, res) {
        const body = req.body;
        const model = new UsuariosModel();
        const data = await model.create(body)
        return res.json(data)
    }

    async findOne(req, res) {
        const id = req.params.id
        const model = new UsuariosModel();
        const data = await model.findOne(id);
        return res.json(data)
    }

    async delete(req, res) {
        const id = req.params.id
        const model = new UsuariosModel();
        const data = await model.delete(id)
        return res.json(data)
    }
}

export default UsuariosController;