import React, { Component } from 'react';
import CardNota from './CardNota';

class listaDeNotas extends Component{
  render(){
    return(
      <ul>
        <li>
          <CardNota />
        </li>
        <li>
        <CardNota />
        </li>
        <li>
        <CardNota />
        </li>
      </ul>
    )
  }
}

export default listaDeNotas;