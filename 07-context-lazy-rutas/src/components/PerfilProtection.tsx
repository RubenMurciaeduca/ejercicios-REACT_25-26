import { Navigate, Outlet } from "react-router-dom";


export const PerfilProtection = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{ "rol" : "not valid" }')

    const isValid = user.rol !== "not valid"

    console.log(user)
    if (isValid) { 
        console.log('navegando a perfil') 
        return <Outlet /> 
    } else { 
        console.log('no es valido') 
        return <Navigate to={'/'} replace /> 
    }
}
