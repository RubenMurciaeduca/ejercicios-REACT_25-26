import { Link, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
        {
            localStorage.getItem('token') 
                ? <div>
                        <Link to={'/niembros'}>Niembros</Link> 
                        <button onClick={handleLogout}>Cerrar Sesión</button>
                  </div>
                : <Link to={'/login'}>Login</Link>
        }
    </>
  )
}
