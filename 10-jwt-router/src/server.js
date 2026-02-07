const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3001;
const SECRET_KEY = 'clave_secreta_asociacion';

app.use(cors());
app.use(express.json());

// Usuario Hardcoded para pruebas
const USER = { username: 'admin', password: '1234' };

// 1. LOGIN (Emisión de Token)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === USER.username && password === USER.password) {
        // El token caduca en 1 hora
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
});

// Middleware de Verificación
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // "Bearer <TOKEN>"

    if (!token) return res.status(403).json({ message: 'Token requerido' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token inválido o expirado' });
        next();
    });
};

// 2. RUTA PROTEGIDA (Proxy a API Externa)
app.get('/api/members', verifyToken, async (req, res) => {
    try {
        // El servidor hace de puente para proteger la API real
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();

        // Simplificamos los datos antes de enviarlos al cliente
        const simplifiedUsers = users.map(u => ({ id: u.id, name: u.name, email: u.email }));
        res.json(simplifiedUsers);
    } catch (error) {
        res.status(500).json({ message: 'Error conectando con API externa' });
    }
});

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
