interface TesteProps{ //declarar os parametros que a funcao vai receber
  texto: string
}

function Teste(props:TesteProps){ //nomear a funcao e colocar a interface dos parametros
  return <button className="bg-orange-600 h-10 px-3 rounded font-medium">{props.texto}</button> //estou colocando no classname as funcoes resumidas, sua numeracao e sempre multiplicada por 4
  //concatenar com o parametro para receber o resultado
}

export function App() {
  return(
    <div className="flex gap-2">
        <Teste texto="pedro"/>
    </div>
  )

}

