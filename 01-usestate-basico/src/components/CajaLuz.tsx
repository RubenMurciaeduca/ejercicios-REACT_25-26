import { useState } from "react"

export const CajaLuz = () => {
  const [estadoLuz,setEstadoLuz] = useState(false)
  return (
    <>
      <div className={!estadoLuz ? 'gris' : 'amarillo'}>
        <p>{ !estadoLuz ? 'Luz Apagada' : 'Luz Encendida'}</p>
      </div>
      <button onClick={()=>setEstadoLuz(!estadoLuz)}>{!estadoLuz ? 'Encender' : 'Apagar'}</button>
    </>
  )
}
