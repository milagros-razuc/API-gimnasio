const miembro = require('../../../models/miembro');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const m = await miembro.findByPk(id);

    if (!m) return res.status(404).json({ error: 'Miembro no encontrado' });

    const miembroFormateado = {
      id: m.idMiembro,
      nombre: m.nombre,
      email: m.email || 'No informado',
      telefono: m.telefono || 'No informado',
      idMembresia: m.idMembresia,
      fechaRegistro: m.fecha_registro || 'No registrado',
      fechaInicioMembresia: m.fecha_inicio_membresia || 'No informado',
      fechaFinMembresia: m.fecha_fin_membresia || 'No informado',
      activo: m.activo ? true : false
    };

    res.json(miembroFormateado);
  } catch (error) {
    console.error('Error al obtener miembro:', error);
    res.status(500).json({ error: 'Error al obtener el miembro' });
  }
};
