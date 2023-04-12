const axios = require('axios');
const xml2js = require('xml2js');
const modelFrete = require('../models/frete');

const getFrete = async (cep) => {
    const apiCorreios = modelFrete.getApi(cep);
    let result
    if (apiCorreios) {

        const response = await axios.get(apiCorreios)
        if (response.status != 200) {
            return "Erro"
        } else {
            xml2js.parseString(response.data, (err, response) => {
                if (err) {
                    console.log('Erro')
                } else {
                    const json = JSON.stringify(response, null, 4)
                    result = json
                }
            })
        }
        return result
    }
    else {
        return "cep invalido";
    }
}

module.exports = getFrete