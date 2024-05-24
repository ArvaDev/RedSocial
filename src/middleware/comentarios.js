
export const validateComments = async (req,res,next) => {
    const { id_publicacion, id_usuario, contenido } = req.body;
    const errorMessage = {};

    if (!id_publicacion && !id_usuario && !contenido){
        return res.status(400).json({
            message: "se requieren todos los datos porfavo ingreselos"
        });
    }
    
    if (!id_publicacion) errorMessage.id_publicacion = "se requiere id_publicaion";
    if (!id_usuario) errorMessage.id_usuario = "se requiere id_usuario";
    if (!contenido) errorMessage.contenido = "se requiere contenido";

    if (Object.keys(errorMessage).length > 0) {
        return res.status(400).json(errorMessage);
    }

    next();
};