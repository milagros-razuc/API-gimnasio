const Membresia = require('../../../models/membresia');

module.exports = async (req, res) => {
  try {
    const { nombre, descripcion, precio_mensual, duracion_dias, activa } = req.body;

    if (!nombre || precio_mensual === undefined || duracion_dias === undefined) {
      return res.status(400).json({ error: 'Nombre, precio mensual y duración son obligatorios' });
    }

    const nuevaMembresia = await Membresia.create({
      nombre,
      descripcion,
      precio_mensual,
      duracion_dias,
      activa
    });

    res.status(201).json({
      message: 'Membresía creada exitosamente',
      membresia: nuevaMembresia
    });
  } catch (error) {
    console.error('Error al crear membresía:', error);
    res.status(500).json({ error: 'No se pudo crear la membresía' });
  }
};
