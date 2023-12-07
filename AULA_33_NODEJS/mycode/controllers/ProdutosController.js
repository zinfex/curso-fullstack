import ProdutosModel from "../models/ProdutosModels.js";


class ProdutosController {
    
    async findAll(req, res) {
        const model = new ProdutosModel()
        const data = await model.findAll()
        return res.json(data)
    }

    async findOne(req, res) {
        const model = new ProdutosModel()
        const data = await model.findOne(req.params.id)
        return res.json(data)
    }

    async create(req, res) {
        const model = new ProdutosModel()
        const data = await model.create(req.body)
        return res.json(data)
    }

    async delete(req, res) {
        const model = new ProdutosModel()
        const data = await model.delete(req.params.id)
        return res.json(data)
    }

}

export default ProdutosController