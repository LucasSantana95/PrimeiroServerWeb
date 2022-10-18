export function calculaFrete(req,res){
    if(validarCep(req.params['cep'])){
      const apiCorreios = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&nCdServico=41106&sCepOrigem=26087150&sCepDestino="+req.params['cep'] +"&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&nVlDiametro=0&nVlValorDeclarado=0&StrRetorno=xml&nIndicaCalculo=3 ";
      
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