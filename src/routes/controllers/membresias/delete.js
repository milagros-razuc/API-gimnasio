const Membresia = require('../../../models/membresia');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const m = await Membresia.findByPk(id);
    if (!m) return res.status(404).json({ error: 'Membresía no encontrada' });

    await m.destroy();
    res.json({ message: 'Membresía eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar membresía:', error);
    res.status(500).json({ error: 'No se pudo eliminar la membresía' });
  }
};
