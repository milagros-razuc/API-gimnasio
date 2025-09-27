const miembro = require('../../../models/miembro');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono,idMembresia, fecha_inicio_membresia, fecha_fin_membresia, activo } = req.body;

  try {
    const m = await miembro.findByPk(id);
    if (!m) return res.status(404).json({ error: 'Miembro no encontrado' });

    await m.update({
      nombre,
      email,
      telefono,
      idMembresia,
      fecha_inicio_membresia,
      fecha_fin_membresia,
      activo
    });

    res.json({ message: 'Miembro actualizado exitosamente', miembro: m });
  } catch (error) {
    console.error('Error al actualizar miembro:', error);
    res.status(500).json({ error: 'No se pudo actualizar el miembro' });
  }
};
