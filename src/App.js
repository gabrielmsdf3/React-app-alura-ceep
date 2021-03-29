import React, { Component } from 'react';
import FormularioCadastro from './components/formularioCadastro';
import listaDeNotas from "./components/listaDeNotas";
class App extends Component() {
  render() {
      return (
        <section>
          <FormularioCadastro />
          <listaDeNotas />
        </section>
    );
  }
}

export default App;
