import { Navigate, Outlet } from "react-router-dom";


export const AdminProtection = () => {
    let valid = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') || '').rol === 'admin';
    if (!valid) {
        return <Navigate to={'/'} replace />
    }
    //muestra rutas anidadas
    return <Outlet />
}
