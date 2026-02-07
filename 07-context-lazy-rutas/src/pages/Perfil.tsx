import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UsuarioContext } from '../context/context';

export const Perfil = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(UsuarioContext);
  if (!context) return null;
  const { dispatch } = context;

  const handleLogout = () => {
    dispatch({ type : 'LOGOUT' })
    navigate('/')
  }

  return (
    <>
      <h2>Perfil</h2>
      <p>Nombre: {location.state.nombre}</p>
      <p>Email: {location.state.email}</p>
      <p>Rol: {location.state.rol}</p>
      { context.state.user?.rol === 'admin' && <a onClick={()=>navigate('/admin', { state : location.state})}>Ir a administracion</a>}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </>
  )
}

export default Perfil