import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => localStorage.getItem('token') ? <Outlet/> : <Navigate to={'/'} replace/>
