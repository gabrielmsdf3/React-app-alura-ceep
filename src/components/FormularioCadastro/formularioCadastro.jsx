import React, { Component } from "react";
import './estilo.css'
class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = {categorias: []}

    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value
  }

  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render(){
    return(
      <form className="form-cadastro"
      onSubmit={this._criarNota.bind(this)}
      >

        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
          <option>Sem Categoria</option>

          {this.state.categorias.map((categoria, index) =>{
          return <option key={index}>{categoria}</option>})}
        </select>
        
        <input
         type="text" 
         placeholder="Título" 
         className="form-cadastro_input"
         onChange={this._handleMudancaTitulo.bind(this)}
         />
        <textarea
        rows={15} 
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={this._handleMudancaTexto.bind(this)} 

        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    )
  }
}

export default FormularioCadastro;

/*
[05:33] Dentro do handle mudança de título quero falar que o this título vai ser igual ao evento target value, 
ou seja, cada vez que o handle for chamado vou atribuir o que tiver no campo de título no meu atributo de 
título na minha classe de formulário cadastro.

[05:54] Quando a gente usa o this título e o this handle mudança de título quer dizer que estou usando um 
atributo ou método de uma instância, então esse formulário cadastro quando a gente está no app js e usa 
ele como tag, quer dizer que está dando por trás dos panos um new no formulário cadastro. Seria algo similar, 
não é exatamente assim que faz, mas a dar um new formulário cadastro.

[06:28] É como se estivesse declarando, instanciando um novo formulário através do new, só que não usamos a
 palavra-chave new, porque o react tem outras coisas que vai fazer por trás dos panos. Ele vai associar essa 
 tag, esse novo elemento que a gente está criando com o que está por trás dos panos.

[06:54] O que a gente está fazendo é toda vez que chamamos uma tag estou dando um new numa classe, 
e essa classe como é instanciada esse this título pertence a uma única classe. Se tivesse vários 
formulários, cada formulário teria seu título, seu atributo definido.
*/