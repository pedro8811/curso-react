import React from 'react';

export default class BaseClasse extends React.Component {
  constructor(props){
    //para permitir o uso de props
    super(props)
    
    //state
    this.state={
      canal:'CFB Cursos',
      curso:'React',
      ativo:true,
      nome:this.props.nomeAluno
    }
    this.status=this.props.status

    //bindagem
    let ad = ativarDesativar.bind(this)
    //Instruções do construtor
  }

  //função para manipular state
  ativarDesativar(){
    this.setState(
      state=>({
        ativo:!state.ativo
      })
    )
  }

  componentDidMount(){
    console.log('O componente foi criado')
  }
  componentDidUpdate(){
    console.log('O componente foi atualizado')
  }
  componentWillUnmount(){
    console.log('O componente foi removido')
  }

  render(){
    return(
      <>
        <h1>Componente de Classe</h1>
        {/* chamada da função COM bind */}
        <button onClick={this.ad}>Ativar Desativar</button>
        
        {/* chamada da função SEM bind */}
        <button onClick={()=>this.ativarDesativar}>Ativar Desativar</button>
      </>
    )
  }

}