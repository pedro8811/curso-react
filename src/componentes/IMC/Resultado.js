import React from 'react';

export default class Resultado extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <>
        <p>Resultado: {this.props.r.toFixed(2)}</p>
      </>
    )
  }
}