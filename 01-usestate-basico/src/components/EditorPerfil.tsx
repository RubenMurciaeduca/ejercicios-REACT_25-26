import { useState } from "react"

interface Form {
    nombre : string,
    email : string
}

export const EditorPerfil = () => {
    const [campos,setCampos] = useState<Form>({
        nombre : '',
        email : ''
    })
    const { nombre , email } = campos

  return (
    <>
        <h2>Editor de Perfil</h2>
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" placeholder="Escribe tu nombre" onChange={e=>setCampos({...campos,nombre : e.target.value})} />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" placeholder="Escribe tu email" onChange={e=>setCampos({...campos,email : e.target.value})} />
        </form>
        <hr />
        <h3>Perfil Actual</h3>
        <p>Nombre: { !nombre ? 'N/A' : nombre }</p>
        <p>Email: { !email ? 'N/A' : email }</p>
    </>
  )
}
