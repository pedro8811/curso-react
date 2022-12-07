// import React, {useState, useEffect} from "react";
// import axios from 'axios';

// export default function ListaCarros(){

//   const [carros, setCarros] = useState([])
  
//   useEffect(() => {
//     const url = 'https://API-Nodejs-Curso.pedro8811.repl.co'
//     fetch(url)
//       .then(res => res.json())
//       .then(
//         (res) => {
//           setCarros(res)
//         }
//       )

    
//     // axios.get(url)
//     //   .then(res => {
//     //     const dadosCarros= res.data
//     //     setCarros(dadosCarros)
//     //   })
//   })
  
//   return(
//     <div>
//       {carros.map(
//         carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
//       )}
//     </div>
//   )
// }