import React from "react"
import "./App.css"

export default function App(){
  
  function ListaNumeros(props){
    const num=props.numeros
    const lista_numeros=num.map(
      (n)=><li key={n.toString()}>{n}</li>
    )
    return (<ul>{lista_numeros}</ul>)
  }

  const array_numeros = [1,2,3,4,5,6,7,8,9]

  return (
    <div>
      <ListaNumeros numeros={array_numeros}/>
    </div>
  )
}