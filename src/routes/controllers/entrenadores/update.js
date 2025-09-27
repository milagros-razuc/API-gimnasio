const entrenador = require('../../../models/entrenador');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono, especialidad, activo } = req.body;

  try {
    const e = await entrenador.findByPk(id);
    if (!e) return res.status(404).json({ error: 'Entrenador no encontrado' });

    await e.update({ nombre, email, telefono, especialidad, activo });

    res.json({ message: 'Entrenador actualizado exitosamente', entrenador: e });
  } catch (error) {
    console.error('Error al actualizar entrenador:', error);
    res.status(500).json({ error: 'No se pudo actualizar el entrenador' });
  }
};
