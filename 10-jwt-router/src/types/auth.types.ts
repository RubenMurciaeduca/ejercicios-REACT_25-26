export interface UserData {
    name: string;
}

export interface Niembro {
    id : number,
    name : string,
    email : string
}

export interface ApiResponse {
    message: string;
    secretData?: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    token?: string;
    user?: {
        name: string;
    }
}
