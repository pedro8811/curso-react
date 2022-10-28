import React,{useState} from "react"
import TabelaIMC from "./TabelaIMC"
import FormPeso from "./FormPeso"
import FormAltura from "./FormAltura"
import Calculo from "./Calculo"
import Resultado from "./Resultado"

export default function IMC(){

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <>
      <FormPeso p={peso} sp={setPeso}/>
      <FormAltura a={altura} sa={setAltura}/>
      <Calculo p={peso} a={altura} sr={setResultado}/><br/><br/>
      <Resultado r={resultado}/><br/>
      <TabelaIMC />
    </>
  )
}