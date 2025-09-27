const entrenador = require('../../../models/entrenador');

module.exports = async (req, res) => {
  try {
    const entrenadores = await entrenador.findAll();

    const entrenadoresFormateados = entrenadores.map(e => ({
      id: e.idEntrenador,
      nombre: e.nombre,
      email: e.email || 'No informado',
      telefono: e.telefono || 'No informado',
      especialidad: e.especialidad || 'No informado',
      activo: e.activo ? true : false
    }));

    res.json(entrenadoresFormateados);
  } catch (error) {
    console.error('Error al obtener entrenadores:', error);
    res.status(500).json({ error: 'No se pudo cargar la lista de entrenadores' });
  }
};
