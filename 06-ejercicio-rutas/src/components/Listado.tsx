import { useState } from "react"
import { cursosIniciales, type Curso } from "../types/Curso"
import { useNavigate } from "react-router-dom"

export const Listado = () => {
    const navigate = useNavigate()
    const [cursos,setCursos] = useState<Curso[]>(cursosIniciales)
  return (
    <>
        <h2>Listado de Cursos</h2>
        {
            cursos.map((c)=>(
                <li key={c.id}>
                    {c.nombre} - <a onClick={()=>navigate(`/${c.id}`,{ state : c})}>Ir a detalle</a>
                </li>
            ))
        }
        <a onClick={()=>navigate('/filtro')}>Proceder a Filtrar</a>
    </>
  )
}
