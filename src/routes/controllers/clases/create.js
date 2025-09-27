const Clase = require('../../../models/clase');

module.exports = async (req, res) => {
  try {
    const { nombre, descripcion, horario, dia_semana, duracion_min, capacidad_max, activa } = req.body;

    if (!nombre || !horario || !dia_semana) {
      return res.status(400).json({ error: 'Nombre, horario y día de la semana son obligatorios' });
    }

    const nuevaClase = await Clase.create({
      nombre,
      descripcion,
      horario,
      dia_semana,
      duracion_min,
      capacidad_max,
      activa
    });

    res.status(201).json({
      message: 'Clase creada exitosamente',
      clase: nuevaClase
    });
  } catch (error) {
    console.error('Error al crear clase:', error);
    res.status(500).json({ error: 'No se pudo crear la clase' });
  }
};
