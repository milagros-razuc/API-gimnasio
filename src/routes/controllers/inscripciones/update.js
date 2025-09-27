const InscripcionClase = require('../../../models/inscripcionClase');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { idMiembro, idClase, fecha_inscripcion, asistio } = req.body;

  try {
    const i = await InscripcionClase.findByPk(id);
    if (!i) return res.status(404).json({ error: 'Inscripción no encontrada' });

    await i.update({ idMiembro, idClase, fecha_inscripcion, asistio });

    res.json({ message: 'Inscripción actualizada exitosamente', inscripcion: i });
  } catch (error) {
    console.error('Error al actualizar inscripción:', error);
    res.status(500).json({ error: 'No se pudo actualizar la inscripción' });
  }
};
