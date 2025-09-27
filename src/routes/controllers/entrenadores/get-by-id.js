const entrenador = require('../../../models/entrenador');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const e = await entrenador.findByPk(id);

    if (!e) return res.status(404).json({ error: 'Entrenador no encontrado' });

    const entrenadorFormateado = {
      id: e.idEntrenador,
      nombre: e.nombre,
      email: e.email || 'No informado',
      telefono: e.telefono || 'No informado',
      especialidad: e.especialidad || 'No informado',
      activo: e.activo ? true : false
    };

    res.json(entrenadorFormateado);
  } catch (error) {
    console.error('Error al obtener entrenador:', error);
    res.status(500).json({ error: 'Error al obtener el entrenador' });
  }
};
