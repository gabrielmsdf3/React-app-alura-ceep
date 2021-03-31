import React, { Component } from 'react';
import CardNota from '../CardNota';
import './estilo.css';
//o map (que devolve uma lista) vai pegar cada uma das categorias em " "e usar como
//e vai passar pra uma função e na função é preciso 
//retornar o que vai ser renderizado
// o array.of ta criando um array com os 3 elementos criados
class ListaDeNotas extends Component{
  render(){
    return(
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    )
  }
}

export default ListaDeNotas;