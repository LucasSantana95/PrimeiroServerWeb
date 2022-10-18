export function buscaEndereco(req,res){
    if(validarCep(req.params['cep'])){
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