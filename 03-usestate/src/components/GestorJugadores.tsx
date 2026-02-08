import { useState, type FormEvent } from "react"
import { v4 as uuid } from 'uuid'

interface Jugador {
    id : string,
    nombre : string
}

export const GestorJugadores = () => {

    const [form,setForm] = useState<Jugador>({
        id : uuid(),
        nombre : ''
    })
    const [jugadores,setJugadores] = useState<Jugador[]>([])
    const { nombre } = form

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // lo primero que hacemos en un formulario
        // aplico las validaciones necesarias puedes añadir más si quieres hacerlo mejor
        if (nombre.trim()){
            // SUPER IMPORTANTE ENTENDER ESTO, ESTO ES EL 90% DEL USESTATE
            setJugadores( jugadores => [
                ...jugadores,
                {
                    id : uuid(),
                    nombre : nombre
                }
            ])
        }
    }

    const handleRemoval = (nombreBuscar : string) => {
        // SUPER IMPORTANTE ENTENDER ESTO, ESTO ES EL 90% DEL USESTATE
        setJugadores(jugadores.filter(j=>j.nombre !== nombreBuscar))
    }

  return (
    <>
        <h2>Jugadores Favoritos</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="titulo" placeholder="Nombre del jugador" onChange={e=>setForm({...form,nombre : e.target.value})}/>
            <button type="submit">Añadir</button>
        </form>
        {
            jugadores.length > 0 ?
            <ul>
                {
                    jugadores.map(j=>(
                        <li key={j.id}>{j.nombre}
                        <button onClick={()=>handleRemoval(j.nombre)}>Eliminar</button>
                        </li>
                    ))
                }
            </ul>
            :
            <p>No hay jugadores añadidos todavía :(</p> // extra para mejor comprensión
        }
    </>
  )
}
