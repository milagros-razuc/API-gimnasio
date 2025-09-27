const Membresia = require('../../../models/membresia');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio_mensual, duracion_dias, activa } = req.body;

  try {
    const m = await Membresia.findByPk(id);
    if (!m) return res.status(404).json({ error: 'Membresía no encontrada' });

    await m.update({ nombre, descripcion, precio_mensual, duracion_dias, activa });

    res.json({ message: 'Membresía actualizada exitosamente', membresia: m });
  } catch (error) {
    console.error('Error al actualizar membresía:', error);
    res.status(500).json({ error: 'No se pudo actualizar la membresía' });
  }
};
