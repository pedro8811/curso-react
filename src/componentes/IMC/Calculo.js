import React from 'react';

export default class Calculo extends React.Component{
  constructor(){
    super()
    this.calc=this.fcalc.bind(this)
  }
  fcalc=()=>{
    const r = this.props.p / (this.props.a * this.props.a)
    this.props.sr(r)
  }

  render(){
    return(
      <>
        <button onClick={this.calc}>Calcular</button>
      </>
    )
  }
}