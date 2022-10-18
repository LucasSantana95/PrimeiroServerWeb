module.exports = {
    getApi(cep){
        if(validarCep(cep)){
            const apiViaCEP = 'https://viacep.com.br/ws/'+cep+'/json/';
            return apiViaCEP;
        }
    }
}

function validarCep(cep){
    let regex = new RegExp('^[0-9]{8}$');
    return regex.test(cep);
}