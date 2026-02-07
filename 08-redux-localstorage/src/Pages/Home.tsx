import { EjercicioForm } from "../components/EjercicioForm"
import { EjerciciosStats } from "../components/EjerciciosStats"
import { ListaEjercicios } from "../components/ListaEjercicios"

export const Home = () => {
  return (
    <>
        <h2>Sesión de Entrenamiento</h2>
        <EjerciciosStats/>
        <EjercicioForm/>
        <ListaEjercicios/>
    </>
  )
}
