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
}

export default UsuariosController;