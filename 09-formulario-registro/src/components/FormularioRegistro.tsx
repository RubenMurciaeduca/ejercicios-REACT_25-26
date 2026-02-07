import { useMemo, useState, type FormEvent } from "react"
import { useForm } from "../hooks/useForm"

interface Formulario {
    nombre : string,
    email : string,
    password : string
}

export const FormularioRegistro = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const {form,onInputChange,onResetForm} = useForm<Formulario>({
        nombre : '',
        email : '',
        password : ''
    })
    const { nombre , email , password } = form 
    const [formValidity,setFormValidity] = useState(false)

    console.log(form)

    // opcionalmente hecho así pero mejor para la optimizacion
    const isEnabled = useMemo(()=>{
        let validity = false;
        if (nombre.trim() === ""){
            return validity
        }

        if (!emailRegex.test(email)){
            setFormValidity(false)
            return validity
        } else {
            setFormValidity(true)
        }

        if (password.trim() === ""){
            return validity
        }

        validity = true
        return validity
    },[form])

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert(`
            Nombre : ${nombre}
            Email : ${email}
            Password : ${password}    
        `)
        localStorage.setItem('formulario',JSON.stringify(form))

        onResetForm()
    }

  return (
    <>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" value={nombre} onChange={onInputChange}/>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={email} onChange={onInputChange} />
            <label htmlFor="password">Contraseña:</label>
            <input type="text" name="password" value={password} onChange={onInputChange} />
            <button type="submit" disabled={isEnabled ? false : true}>Registrarse</button>
            { !formValidity && <p>email incorrecto</p>}
        </form>
    </>
  )
}
