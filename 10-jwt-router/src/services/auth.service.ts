//En este fichero se centralizan las las llamadas al backend. React no hace fetch directamente
//utiliza las funciones loginRes y getProtectedData

import type { LoginResponse, Niembro } from "../types/auth.types"

const API_URL = 'http://localhost:3001';

export const LoginRes = async (username: string, password: string): Promise<LoginResponse> => {

    const response = await fetch(`${API_URL}/login`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
    return response.json(); //convierto la respuesta a JSON
}


export const getProtectedData = async (token: string): Promise<Niembro[]> => {
    const response = await fetch(`${API_URL}/api/members`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    const data = await response.json(); //convierto la respuesta a JSON
    if (!response.ok) {
        throw { status: response.status, message: data.message };
    }
    return data; //devuelve un ApiResponse
}

