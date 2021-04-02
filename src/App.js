import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/';
import './App.css';
import './index.css';

class App extends Component {

  constructor(){
    super();
    this.notas = [];
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota)
  }
  render() {
      return (
        <section className="conteudo">
          <FormularioCadastro  criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas notas={this.notas}/>
        </section>
    );
  }
}

export default App;
