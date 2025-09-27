const Clase = require('../../../models/clase');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, horario, dia_semana, duracion_min, capacidad_max, activa } = req.body;

  try {
    const c = await Clase.findByPk(id);
    if (!c) return res.status(404).json({ error: 'Clase no encontrada' });

    await c.update({ nombre, descripcion, horario, dia_semana, duracion_min, capacidad_max, activa });

    res.json({ message: 'Clase actualizada exitosamente', clase: c });
  } catch (error) {
    console.error('Error al actualizar clase:', error);
    res.status(500).json({ error: 'No se pudo actualizar la clase' });
  }
};
