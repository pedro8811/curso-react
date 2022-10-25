import React, {useState} from "react"

export default function App(){

  const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo']
  const listaCarros = carros.map((c)=><p>{c}</p>)
  

  return (
      <>
          {listaCarros}
      </>
  )
}