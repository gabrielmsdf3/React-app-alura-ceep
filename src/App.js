import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/';
import ListaDeCategorias from './components/ListaDeCategorias'
import './App.css';
import './index.css';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {

  constructor(){
    super();

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    /*
    this.state = {
      notas: [],
      categorias: ["games", "musica"],
    };
    */
  }

  /*criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }
    
  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }
  
  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }
  */
  render() {
      return (
        <section className="conteudo">
          <FormularioCadastro 
            categorias={this.categorias.categorias}  
            criarNota={this.notas.criarNota}
          />
          <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria}
          categorias={this.categorias.categorias}

          />
          <ListaDeNotas 
          apagarNota={this.notas.deletarNota}
          notas={this.notas.notas}
            
          />
          </main>
        </section>
    );
  }
}

export default App;
