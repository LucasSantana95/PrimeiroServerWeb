const axios = require('axios');
const modelEndereco = require('../models/endereco');

const getEndereco = (cep) =>{
    if(modelEndereco.getApi(cep)){
        const apiViaCEP = 'https://viacep.com.br/ws/'+cep+'/json/';
            
        return axios.get(apiViaCEP).then(response => {
            if (response.status !== 200) {
                console.log('Ocorreu um problema. Codigo: ' +response.status); 
                return;
            }
            if(response.data.erro == true){
                console.log('cep invalido - erro = true')
                return "cep invalido"
            } 
                console.log("response ", response.data);
                return response.data
            })
    }
    else{
        console.log('cep invalido')
        return "cep invalido"
    }
}

module.exports = getEndereco