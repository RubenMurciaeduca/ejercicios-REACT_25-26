import { Route, Routes } from "react-router-dom"
import { Listado } from "../components/Listado"
import { DetalleCurso } from "../components/DetalleCurso"
import { ListadoFiltrado } from "../components/ListadoFiltrado"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Listado/>}/>
            <Route path="/:idCurso" element={<DetalleCurso/>}/>
            <Route path="/filtro" element={<ListadoFiltrado/>}/>
        </Routes>
    </>
  )
}
