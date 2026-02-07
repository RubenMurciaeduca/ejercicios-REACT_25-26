import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Ejercicio {
	id: number
	nombre: string
	series: number
	repeticiones: number
	completado: boolean
}

interface EjercicioState {
    ejercicios: Ejercicio[];
}

const initialState: EjercicioState = {ejercicios : [
    { id : 1, nombre : 'sentadillas', series : 2, repeticiones : 10, completado : false},
    { id : 2, nombre : 'flexiones', series : 3, repeticiones : 20, completado : false},
]}

export const ejerciciosSlice = createSlice({
    name: "ejercicios",
    initialState,
    reducers: {
        anyadirEjercicio : (state:EjercicioState, action: PayloadAction<Ejercicio>) => {
            state.ejercicios.push(action.payload)
        },
        cambiarEstadoEjercicio : (state:EjercicioState, action: PayloadAction<number>) => {
            let indexEjercicio = state.ejercicios.findIndex(e=>e.id === action.payload)
            let ejercicio = state.ejercicios.find(e=>e.id === action.payload)

            if (ejercicio){
                ejercicio.completado = !ejercicio.completado
                state.ejercicios.splice(indexEjercicio,1,ejercicio)
            }
            
        },
        eliminarEjercicio : (state:EjercicioState, action: PayloadAction<number>) => {
            let indiceEjercicio = state.ejercicios.findIndex(e=>e.id === action.payload)
            state.ejercicios.splice(indiceEjercicio,1)
        }
    }
})

export const {
    anyadirEjercicio,
    cambiarEstadoEjercicio,
    eliminarEjercicio
} = ejerciciosSlice.actions;

