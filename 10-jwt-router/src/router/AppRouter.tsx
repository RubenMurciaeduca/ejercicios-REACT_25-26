import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { useState } from "react"
import { RequireAuth } from "../components/RequireAuth"
import { Niembros } from "../pages/Niembros"

export const AppRouter = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))

  const handleLoginSuccess = (token: string) => {
    setToken(token);
  }

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/login" element={<Login LoginSuccess={handleLoginSuccess} />}/>
            
            <Route path="/niembros" element={<RequireAuth/>}>
                <Route index element={<Niembros token={token || ''}/>}/>
            </Route>
        </Routes>
    </>
  )
}
