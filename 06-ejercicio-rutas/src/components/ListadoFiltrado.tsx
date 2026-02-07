import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { cursosIniciales, type Curso } from "../types/Curso";

export const ListadoFiltrado = () => {
    /**
     * useSearchParams
     * ----------------
     * Permite leer parámetros opcionales en la URL (query string).
     * Se usa principalmente para filtros, ordenación, paginación o búsquedas.
     *
     * Ejemplo:
     *   /cursosFiltrados?nivel=basico
     *   const [searchParams] = useSearchParams();
     *   const nivel = searchParams.get("nivel");
     */

    const [searchParams, setSearchParams] = useSearchParams();

    const nivel = searchParams.get("nivel")?.toLowerCase() || 'basico';

    //cambiar parámetros desde los inputs
    const actualizarParams = (clave: string, valor: string) => {
        searchParams.set(clave, valor); //NUNCA HACER searchParams.set ({min:valor})
        setSearchParams(searchParams);
    }
    const navigate = useNavigate()
    const [cursos,setCursos] = useState<Curso[]>(cursosIniciales)

  return (
    <>
        <h2>Listado de Cursos para FILTRAR</h2>
        <input type="text" name="nivel" onChange={e=>actualizarParams('nivel',e.target.value)} />

        {
            cursos.filter(c=>c.nivel === nivel).map((c)=>(
                <li key={c.id}>
                    {c.nombre} - <a onClick={()=>navigate(`/${c.id}`,{ state : c})}>Ir a detalle</a>
                </li>
            ))
        }
        <a onClick={()=>navigate('/')}>Volver a la Lista</a>
    </>
  )
}
