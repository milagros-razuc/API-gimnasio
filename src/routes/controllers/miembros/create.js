const miembro = require('../../../models/miembro');

module.exports = async (req, res) => {
  try {
    const { nombre, email, telefono, idMembresia, fecha_inicio_membresia, fecha_fin_membresia, activo } = req.body;

    const nuevoMiembro = await miembro.create({
      nombre,
      email,
      telefono,
      idMembresia,
      fecha_inicio_membresia,
      fecha_fin_membresia,
      activo
    });

    res.status(201).json({
      message: 'Miembro creado exitosamente',
      miembro: nuevoMiembro
    });
  } catch (error) {
    console.error('Error al crear miembro:', error);
    res.status(500).json({ error: 'No se pudo crear el miembro' });
  }
};
