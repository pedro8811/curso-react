import React from "react";

export default class Carro extends React.Component{
  constructor(props){
    super(props)
    this.modelo = 'HRV'
    this.state = {
      ligado: false,
      velAtual: 0,
    }
    this.ld = this.ligarDesligar.bind(this)
  }

  ligarDesligar(){
    this.setState({ligado:!this.state.ligado})
    // this.state.ligado == false ? this.setState({ligado:true}) : this.setState({ligado:false})
    // this.setState(
    //   (state)=>(
    //     {ligado: !state.ligado}
    //   )
    // )
    // this.setState(
    //   function(state){
    //     return{
    //       ligado:!state.ligado
    //     }
    //   }
    // )
  }

  acelerar(){
    this.setState(
      (state, props) => (
        {velAtual:state.velAtual + props.fator}
      )
    )
  }

  componentDidMount(){
    console.log('O carro foi criado')
  }
  componentDidUpdate(){
    console.log('O carro foi atualizado')
  }
  componentWillUnmount(){
    console.log('O carro foi removido')
  }

  render(){
    return(
      <div>
        <h1>Meu carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
        <p>Velocidade atual: {this.state.velAtual}</p>
        <button onClick={this.ld}>
          {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}
        </button><br/><br/>
        <button onClick={() => this.acelerar()}>
          Acelerar
        </button><br/><br/>
      </div>
    )
  }
}