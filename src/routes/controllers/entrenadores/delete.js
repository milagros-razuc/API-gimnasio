const entrenador = require('../../../models/entrenador');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const e = await entrenador.findByPk(id);
    if (!e) return res.status(404).json({ error: 'Entrenador no encontrado' });

    await e.destroy();
    res.json({ message: 'Entrenador eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar entrenador:', error);
    res.status(500).json({ error: 'No se pudo eliminar el entrenador' });
  }
};
