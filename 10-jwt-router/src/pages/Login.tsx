import { useState } from "react"
import { LoginRes } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

interface Props {
    LoginSuccess: (token: string, user: any) => void;
}

export const Login: React.FC<Props> = ({ LoginSuccess }) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError('');

        try {
            const data = await LoginRes(username, password); //me comunico con el backend
            console.log('el backend me da en data ',data)
            //success, token, user, message
            if (data.success && data.token) {
                LoginSuccess(data.token, data.user);
                localStorage.setItem('token', data.token);
                navigate('/niembros')
            } else {
                setError(data.message);
            }
        } catch {
            setError('Error con el servidor')

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="usuario"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
            {error && <p>{error}</p>}
        </>
    )
}
