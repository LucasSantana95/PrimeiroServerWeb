const axios = require('axios');
const modelEndereco = require('../models/endereco');

module.exports = {
    get: (req,res) => {
        if(modelEndereco.getApi(req.params['cep'])){
            const apiViaCEP = 'https://viacep.com.br/ws/'+req.params['cep']+'/json/';
                
            axios.get(apiViaCEP).then(response => {
                if (response.status !== 200) {
                    console.log('Ocorreu um problema. Codigo: ' +response.status); 
                    return;
                }
                if(response.erro == "true"){
                    return res.json("cep invalido");
                } 
                    return res.json(response.data);
                })
        }
        else{
            return res.json("cep invalido");
        }
    }
}