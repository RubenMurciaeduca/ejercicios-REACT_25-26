import { useState } from "react"
import { getProtectedData } from "../services/auth.service"
import type { Niembro } from "../types/auth.types"
import { Header } from "../components/Header"

type Props = {
  token : string
}

export const Niembros = ( { token } : Props ) => {
  const [niembros,setNiembros] = useState<Niembro[]>([])

  getProtectedData(token).then(n=>setNiembros(n)).catch(e=>console.log('error al hacer el fetch'))

  return (
    <>
      <Header/>
      <h2>Niembros</h2>
      <ul>
        {
          niembros.map(n=>(
            <li key={n.id}>{n.id} - {n.email} - {n.name}</li>
          ))
        }
      </ul>
    </>
  )
}
