

export const userMiddleware = (req, res, next) => {
    
    const { nombre, username, email, password, avatar, interests, carrera, estado, edad, rol } = req.body;
    if (!nombre || !username || !email || !password || !edad || !avatar || !interests || !carrera || !estado || !rol) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos" });
    }
    //validacion de email caracteres expresion regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "El formato del email es inválido" });
    }

    next()
}