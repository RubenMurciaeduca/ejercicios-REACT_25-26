import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { PerfilProtection } from "../components/PerfilProtection"
import { AdminProtection } from "../components/AdminProtection"
import { lazy, Suspense } from "react"

const Perfil = lazy(() => import("../pages/Perfil"));
const Admin = lazy(() => import("../pages/Admin"));

export const AppRouter = () => {
  return (
    <>
        <Suspense fallback={<h2>Cargando página....</h2>}>
            <Routes>

                <Route path="/" element={<Login/>}/>

                <Route path="/perfil" element={<PerfilProtection/>}>
                    <Route index element={<Perfil/>}/>
                </Route>

                <Route path="/admin" element={<AdminProtection/>}>
                    <Route index element={<Admin/>}/>
                </Route>

            </Routes>
        </Suspense>
    </>
  )
}
