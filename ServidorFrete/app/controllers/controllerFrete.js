const getFrete = require('../services/serviceFrete')

module.exports = {
    get: async (req,res) => {
        console.log("getFrete", await getFrete(req.params.cep));
        res.json(await getFrete(req.params.cep))
    }
}