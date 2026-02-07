import { createContext, useEffect, useReducer } from "react";
import { initialState, usuarioReducer, type Acciones, type AppState } from "../reducer";

interface UsuarioContexTipo {
    state: AppState;
    dispatch: React.Dispatch<Acciones>;
}

export const UsuarioContext = createContext<UsuarioContexTipo | undefined>(undefined);


export const UsuarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    // persistencia en el localstorage
    useEffect(()=>{
        if (state.user){
            localStorage.setItem('user',JSON.stringify(state.user))
        } else {
            localStorage.removeItem('user')
        }
    },[state.user])

    return (
        <UsuarioContext.Provider value={{ state, dispatch }} >
            {children}
        </UsuarioContext.Provider >
    )
}

