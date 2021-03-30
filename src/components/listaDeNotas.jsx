import React, { Component } from 'react';
import CardNota from './CardNota';
//o map (que devolve uma lista) vai pegar cada uma das categorias em " "e usar como
//e vai passar pra uma função e na função é preciso 
//retornar o que vai ser renderizado
// o array.of ta criando um array com os 3 elementos criados
class ListaDeNotas extends Component{
  render(){
    return(
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
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