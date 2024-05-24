
export const userMiddleware = (req, res, next) => {
    
    const { nombre, username, email, password, edad } = req.body;
    if (!nombre || !username || !email || !password || !edad) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos" });
    }
    
    // Si hay más middlewares añadirlos antes de next
    
    // Insano si hay más añade otro middleware
    
    next()
}