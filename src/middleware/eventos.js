function validateEventFields(req, res, next) {
    const { id_usuario, nombre_evento, direccion, descripcion, fecha } = req.body;
  
    if (!id_usuario || !nombre_evento || !direccion || !descripcion || !fecha) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fecha.match(fechaRegex)) {
      return res.status(400).json({ error: 'El formato de la fecha es incorrecto. Debe ser YYYY-MM-DD' });
    }
  
    next();
  }
  
  module.exports = validateEventFields;
  