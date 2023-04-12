const getEndereco = require('../services/serviceEndereco')

module.exports = {
    get: async (req,res) => {
        res.json(await getEndereco(req.params.cep))
    }
}