import {v4 as uuid} from 'uuid'

interface Props {
    frutas : string[]
    onFunctionClick : (fruta:string) => void
}

export const HijoFrutas = ({ frutas , onFunctionClick}:Props) => {
  return (
    <>
      {
        frutas.map(f=>(
          <button key={uuid()} onClick={()=>onFunctionClick(f)}>{f}</button>
        ))
      }
    </>
  )
}
