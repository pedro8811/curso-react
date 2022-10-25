import React from "react";
import LedVerde from './imgs/led_verde.png'
import LedVermelho from './imgs/led_vermelho.png'

export default function Led(props){

  return (
      <>
        <img style={{height: '150px'}} src={props.ligado?LedVerde:LedVermelho}/>
        <button onClick={()=>props.setLigado(!props.ligado)}>
          {props.ligado?'Desligar':'Ligar'}
        </button>
      </>
  )
}