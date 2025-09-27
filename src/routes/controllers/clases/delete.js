const Clase = require('../../../models/clase');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const c = await Clase.findByPk(id);
    if (!c) return res.status(404).json({ error: 'Clase no encontrada' });

    await c.destroy();
    res.json({ message: 'Clase eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar clase:', error);
    res.status(500).json({ error: 'No se pudo eliminar la clase' });
  }
};
