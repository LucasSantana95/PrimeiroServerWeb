const mongoose = require('mongoose');
const livroSchema = new mongoose.Schema({
  nome: String,
  autor: String,
});
const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;
/* 
  alterarNomeLivro(id,nome){
    const res = livro.updateOne({ _id: id }, { nome: nome });
    console.log("Livro alterado com sucesso! " + res);
  },
  alterarAutorLivro(id,autor){
    const res = livro.updateOne({ _id: id }, { autor: autor });
    console.log("Livro alterado com sucesso! ");
  },
  deletarLivro(id){
    livro.deleteOne({_id: id}).then(() =>{ console.log("Livro Deletado com sucesso!")});
  }
 */