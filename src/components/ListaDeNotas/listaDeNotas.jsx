import React, { Component } from 'react';
import CardNota from '../CardNota';
import './estilo.css';
//o map (que devolve uma lista) vai pegar cada uma das categorias em " "e usar como
//e vai passar pra uma função e na função é preciso 
//retornar o que vai ser renderizado
// o array.of ta criando um array com os 3 elementos criados
class ListaDeNotas extends Component{
  constructor(){
    super()
    this.state = {notas:[]}
    this._novasNotas = this._novasNotas.bind(this)
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas)
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas)

  }

  _novasNotas(notas){
this.setState({...this.state, notas})
  }

  render(){
    return(
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (

            <li className="lista-notas_item" key={index}>

              <CardNota 
              indice={index}
              apagarNota={this.props.apagarNota}
              titulo={nota.titulo} 
              texto={nota.texto}
              categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    )
  }
}

export default ListaDeNotas;