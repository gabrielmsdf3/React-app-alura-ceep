import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/';
import './App.css';
import './index.css';

class App extends Component {
  render() {
      return (
        <section className="conteudo">
          <FormularioCadastro />
          <ListaDeNotas></ListaDeNotas>
        </section>
    );
  }
}

export default App;
