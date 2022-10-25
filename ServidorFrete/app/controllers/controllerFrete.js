const axios = require('axios');
const xml2js = require('xml2js');
const modelFrete = require('../models/frete');

module.exports = {
    get: (req,res) => {
        const apiCorreios = modelFrete.getApi(req.params['cep']);
        if(apiCorreios){

            axios.get(apiCorreios).then(response => {
                if (response.status !== 200) {
                console.log('Ocorreu um problema. Codigo: ' +response.status); 
                return;
                }
                if(response.erro == "true"){
                return res.json("cep invalido");
                } 
                const parser = new xml2js.Parser();
                parser.parseString(response.data,(err,resultado) => {
                    response.data = resultado;
                    return res.json(response.data);
                });
            })
        }
        else{
            return res.json("cep invalido");
        }
    }
}