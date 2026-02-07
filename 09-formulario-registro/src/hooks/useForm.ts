import { useState, type ChangeEvent } from "react";

// Usamos genéricos (<T extends object>) para que el hook pueda aceptar cualquier tipo de objeto
// como estado inicial (por ejemplo, { nombre: string, correo: string })
export const useForm = <T extends object>(initialForm: T) => {
    const [form, setForm] = useState(initialForm);


    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        //console.log(e)
        //console.log(e.target.name)
        //console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onResetForm = (): void => {
        setForm(initialForm)
    }
    return {
        //...form, //devuelve las propiedades del objeto (nombre, correo, password)
        form, //devuelve el objeto completo
        onInputChange,
        onResetForm,
    }
}
