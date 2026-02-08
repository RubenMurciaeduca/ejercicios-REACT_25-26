import { useEffect, useRef, useState, type FormEvent } from "react"

interface Tarea {
    nombre : string
}

export const GestorDeTareas = () => {

    const numRenders = useRef(0)
    const [form,setForm] = useState<Tarea>({
        nombre : ''
    })

    const [numChanges,setNumChanges] = useState(0)
    const [tareas,setTareas] = useState<Tarea[]>([])
    const { nombre } = form
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!tareas.some(t=>t.nombre === nombre)){
            setNumChanges(s=>s+1)
            // de nuevo el usestate funcional, es fundamental entenderlo para evitar problemas de estado desactualizado
            setTareas( tareas => [
                ...tareas,
                {
                    nombre : nombre
                }
            ])
        }
    }

    useEffect(()=>{
        numRenders.current++
    },[tareas,numChanges])

    const removeLast = () => {
        setNumChanges(s=>s+1)
        console.log(tareas.slice(0,tareas.length-1))
        setTareas(tareas.slice(0,tareas.length-1))
        console.log(tareas)
    }

  return (
    <>
        <h2>Gestor de Tareas</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nueva Tarea" name="nombre" onChange={e=>setForm({nombre : e.target.value})}/>
            <button type="submit">Añadir Tarea</button>
            <button type="button" onClick={removeLast}>Eliminar Última</button>
        </form>
        <ul>
            {
                tareas.map(t=>(
                    <li key={t.nombre}>{t.nombre}</li>
                ))
            }
        </ul>
        <p>Total tareas: {tareas.length}</p>
        <p>Cambios realizados: {numChanges}</p>
        <p>Renders del componente: {numRenders.current}</p>
    </>
  )
}
