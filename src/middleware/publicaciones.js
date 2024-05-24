const validatePublicationData = (req, res, next) => {
    const { id_usuario, content } = req.body;
  
   
    const publicacion = [];
    if (!id_usuario) publicacion.push('id_usuario');
    if (!content) publicacion.push('content');
  
    if (publicacion.length > 0) {
      return res.status(400).json({
        message: 'Faltan campos requeridos',
        publicacion
      });
    }
  
    if (typeof content !== 'string' || content.trim().length === 0) {
      return res.status(400).json({
        message: 'El contenido de la publicación no es válido'
      });
    }
  
  
    next();
  };