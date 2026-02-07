import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export const EjerciciosStats = () => {
    const ejercicios = useSelector(
        (state: RootState) => state.ejercicios.ejercicios
    )
  return (
    <>
      <p>Total de ejercicios: {ejercicios.length}</p>
      <p>Completados: {ejercicios.filter(e=>e.completado).length}</p>
    </>
  )
}
