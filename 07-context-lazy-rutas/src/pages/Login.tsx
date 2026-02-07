import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UsuarioContext } from "../context/context";
import type { Usuario } from "../reducer";

export const Login = () => {
    const navigate = useNavigate()
    const context = useContext(UsuarioContext);
    if (!context) return null;
    const { dispatch } = context;

    const handleLogin = (user : Usuario) => {
        dispatch({ type : 'LOGIN', payload : user})
        navigate('/perfil', { state : user})
    }

  return (
    <>
        <h2>Login</h2>
        <button onClick={()=>handleLogin({ nombre : 'Usuario' , email : 'user@app.com', rol : 'user'})}>Entrar como usuario</button>
        <button onClick={()=>handleLogin({ nombre : 'Administrador' , email : 'admin@app.com', rol : 'admin'})}>Entrar como admin</button>
    </>
  )
}
