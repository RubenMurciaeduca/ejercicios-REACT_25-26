
import { configureStore } from "@reduxjs/toolkit";
import { ejerciciosSlice } from "./ejercicioSlice";

export const store = configureStore({
    reducer: {
        ejercicios: ejerciciosSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;