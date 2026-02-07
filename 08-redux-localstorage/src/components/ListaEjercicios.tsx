import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { cambiarEstadoEjercicio, eliminarEjercicio } from '../store/ejercicioSlice';

export const ListaEjercicios = () => {
    const ejercicios = useSelector(
        (state: RootState) => state.ejercicios.ejercicios
    )
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
      localStorage.setItem('ejercicios',JSON.stringify(ejercicios))
    },[ejercicios])
  return (
    <>
      <ul>
        {
          ejercicios.map(e=>(
            <li key={e.id}>{e.nombre} - {e.series}x{e.repeticiones} 
              <button onClick={()=>dispatch(cambiarEstadoEjercicio(e.id))}>{e.completado ? 'Deshacer' : 'Completar'}</button>
              <button onClick={()=>dispatch(eliminarEjercicio(e.id))}>Eliminar</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}
