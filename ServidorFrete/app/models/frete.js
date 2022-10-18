module.exports = {
    getApi(cep){
        if(validarCep(cep)){
            const apiCorreios = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&nCdServico=41106&sCepOrigem=26087150&sCepDestino="+cep+"&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&nVlDiametro=0&nVlValorDeclarado=0&StrRetorno=xml&nIndicaCalculo=3 ";
            return apiCorreios;
        }
    }
}

function validarCep(cep){
    let regex = new RegExp('^[0-9]{8}$');
    return regex.test(cep);
}

