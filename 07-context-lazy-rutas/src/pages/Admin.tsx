import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Admin = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
      <h2>Panel de Administración</h2>
      <p>Solo accesible para usuarios con el rol de admin</p>
      <a onClick={()=>navigate('/perfil', { state : location.state })}>Volver al Perfil</a>
    </>
  )
}

export default Admin
