import { useMemo } from "react"
import { HijoFrutas } from "./HijoFrutas"

export const PadreFrutas = () => {
  const arrayFrutas = ['manzana', 'pera', 'melocotón', 'plátano', 'granada', 'mango']

  // extra para poder optimizar, pero lo puedes calcular en cada render también
  const arrayFrutasFiltradas = useMemo(()=>arrayFrutas.filter(f=>f.toUpperCase().startsWith('M')),[arrayFrutas])

  const funcionNormal = (fruta:string) => {
    console.log(fruta)
  }

  const funcionEncapsulada = (fruta:string) => {
    if (arrayFrutasFiltradas.includes(fruta)){
      console.log(`${fruta} empieza por M/m`)
    }
  }

  return (
    <>
      <p>Frutas normal</p>
      <HijoFrutas frutas={arrayFrutas} onFunctionClick={funcionNormal}/>
      <p>Empiezan por M??</p>
      <HijoFrutas frutas={arrayFrutas} onFunctionClick={funcionEncapsulada}/>
    </>
  )
}
