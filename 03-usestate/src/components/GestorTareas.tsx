import { useState, type FormEvent } from "react"
import { v4 as uuid } from 'uuid'

interface Tarea {
    id : string
    titulo : string
    prioridad : string
    completada : boolean
}

export const GestorTareas = () => {
    const [form,setForm] = useState<Tarea>({
        id : uuid(),
        titulo : '',
        prioridad : 'Baja',
        completada : false
    })
    const [tareas,setTareas] = useState<Tarea[]>([])
    const { titulo , prioridad , completada } = form

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // lo primero que hacemos en un formulario
        // aplico las validaciones necesarias
        if (titulo.trim()){
            setTareas([
                ...tareas,
                {
                    id : uuid(),
                    titulo : titulo,
                    prioridad : prioridad,
                    completada : false
                }
            ])
        }
    }

    const handleChangeStatus = (titulo_buscar : string) => {
        // SUPER IMPORTANTE ENTENDER ESTO, ESTO ES EL 90% DEL USESTATE
        setTareas(tareas.map(t=>{
                return t.titulo === titulo_buscar ? {...t,completada : !t.completada} : t
        }))
    }

  return (
    <>
        <h2>Gestor de Tareas</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="titulo" placeholder="Titulo de la tarea" onChange={e=>setForm({...form,titulo : e.target.value})}/>
            <select name="prioridad" onChange={e=>setForm({...form,prioridad : e.target.value})}>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
            </select>
            <button type="submit">Añadir</button>
        </form>
        {
            tareas.length > 0 ?
            <ul>
                {
                    tareas.map(t=>(
                        <li key={t.id} className={t.completada ? 'marcada' : 'desmarcada'}>{t.titulo} -- {t.prioridad}
                        <button onClick={()=>handleChangeStatus(t.titulo)}>{t.completada ? 'Desmarcar' : 'Completar'}</button>
                        </li>
                    ))
                }
            </ul>
            :
            <p>No hay tareas añadidas aún :(</p> // extra para mejor comprensión
        }
    </>
  )
}
