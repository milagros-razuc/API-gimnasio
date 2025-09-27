const miembro = require('../../../models/miembro');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const m = await miembro.findByPk(id);
    if (!m) return res.status(404).json({ error: 'Miembro no encontrado' });

    const eliminado = {
      id: m.idMiembro,
      nombre: m.nombre,
      email: m.email,
      telefono: m.telefono,
      idMembresia: m.idMembresia,
      fechaRegistro: m.fecha_registro,
      fechaInicioMembresia: m.fecha_inicio_membresia,
      fechaFinMembresia: m.fecha_fin_membresia,
      activo: m.activo
    };

    await m.destroy();

    res.json({
      message: 'Miembro eliminado exitosamente',
      eliminado
    });
  } catch (error) {
    console.error('Error al eliminar miembro:', error);
    res.status(500).json({ error: 'No se pudo eliminar el miembro' });
  }
};
