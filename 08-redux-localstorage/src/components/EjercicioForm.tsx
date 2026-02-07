import { useState, type FormEvent } from 'react'
import { anyadirEjercicio, type Ejercicio } from '../store/ejercicioSlice'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState  } from '../store/store';

export const EjercicioForm = () => {
  const ejercicios = useSelector(
      (state: RootState) => state.ejercicios.ejercicios
  )
  const dispatch = useDispatch<AppDispatch>();
  const [form,setForm] = useState<Ejercicio>({
    id : Date.now(),
    nombre : '',
    repeticiones : 1,
    series : 1,
    completado : false
  })

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logica de formulario muy basica, mejorar por si se quiere más robusta
    if (form.nombre.trim() && !ejercicios.some(e=>e.nombre === form.nombre))
    dispatch(anyadirEjercicio({...form}))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ejercicio' name='nombre' onChange={e=>setForm({...form,nombre:e.target.value})}/>
        <input type="number" placeholder='1' onChange={e=>setForm({...form,series:parseInt(e.target.value)})}/>
        <input type="number" placeholder='1' onChange={e=>setForm({...form,repeticiones:parseInt(e.target.value)})}/>
        <button type='submit'>Añadir</button>
      </form>
    </>
  )
}
