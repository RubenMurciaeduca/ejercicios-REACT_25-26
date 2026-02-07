export interface Usuario {
    nombre : string,
    email : string,
    rol : 'admin' | 'user'
}

export interface AppState {
    user : Usuario | null;
}

export type Acciones =
    | { type: 'LOGIN'; payload: Usuario }
    | { type: 'LOGOUT' }


export const initialState: AppState = {
    user : null
}

export const usuarioReducer = (state: AppState, action: Acciones) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                user : action.payload // el payload contiene el user
            }
        case 'LOGOUT':
            return {
                user : null
            }
        default:
            return state;
    }

}

