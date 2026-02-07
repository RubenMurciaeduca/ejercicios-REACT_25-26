import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

export const DetalleCurso = () => {
    /**
     * useParams
     * ----------
     * Permite leer parámetros obligatorios definidos en la ruta.
     * Se usa cuando el valor identifica un recurso específico.
     *
     * Ejemplo:
     *   /cursos/3
     *   const { id } = useParams();
     */

    const navigate = useNavigate()
    const { idCurso } = useParams();
    const location = useLocation();

  return (
    <div>
        Detalle del curso {idCurso} - {location.state.nombre}
        <p>Nivel : {location.state.nivel} </p>
    <a onClick={()=>navigate('/')}>Volver</a>
    </div>
  )
}
