import { useEffect, useState } from "react"
import type { INoticia } from "../types"
import { noticiasInicio } from "../data"
import { v4 as uuid } from 'uuid'

export const GestorNoticias = () => {
    const [loading,setLoading] = useState(true)
    const [noticias,setNoticias] = useState<INoticia[]>([])
    const [categoriaSeleccionada , setCategoriaSeleccionada] = useState<string>("Todas")

    useEffect(()=>{
        const id = setTimeout(() => {
            setNoticias(noticiasInicio)
            setLoading(false)
        }, 3000);
        console.log('solo entra la primera vez')
        return () => {
            clearTimeout(id) // para evitar efectos secundarios innesperados
        }
    },[])

    useEffect(() => {
        const creacion = setInterval(() => {
            setNoticias(prevNoticias => {
                if (prevNoticias.length === 0) return prevNoticias

                return [
                    ...prevNoticias,
                    {
                        id: prevNoticias.length > 0 ? prevNoticias[prevNoticias.length -1].id + 1 : 1,
                        titulo: `Nueva noticia automática ${prevNoticias.length > 0 ? prevNoticias[prevNoticias.length -1].id + 1 : 1}`,
                        categoria: "Partidos"
                    }
                ]
            })
        }, 5000)

        return () => clearInterval(creacion)
    }, [])



    const handleClear = () => {
        setNoticias([])
    }    

    if (loading) {
        return (
            <>
            <h2>Noticias de Fútbol</h2>
            <select onChange={e=>setCategoriaSeleccionada(e.target.value)}>
                <option value="Todas">Todas</option>
                <option value="Fichajes">Fichajes</option>
                <option value="Clubes">Clubes</option>
                <option value="Partidos">Partidos</option>
            </select>
            <button onClick={handleClear}>Vaciar Noticias</button>
            <p>Cargando noticias...</p>
            </>
        )
    }

  return (
    <>
        <h2>Noticias de Fútbol</h2>
        <select onChange={e=>setCategoriaSeleccionada(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Fichajes">Fichajes</option>
            <option value="Clubes">Clubes</option>
            <option value="Partidos">Partidos</option>
        </select>
        <button onClick={handleClear}>Vaciar Noticias</button>
        {
            noticias.length === 0 ? <p>No hay noticias disponibles</p>
            : 
            <ul>
                {
                    categoriaSeleccionada !== "Todas" ? noticias.filter(n=>n.categoria === categoriaSeleccionada).map(n=>(
                        <li key={n.id}><b>{n.titulo}</b> --- {n.categoria}</li>
                    ))
                    : noticias.map(n=>(
                        <li key={n.id}><b>{n.titulo}</b> --- {n.categoria}</li>
                    ))
                }
            </ul>
        }
    </>
  )
}
