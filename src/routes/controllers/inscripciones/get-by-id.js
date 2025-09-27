const InscripcionClase = require('../../../models/inscripcionClase');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const i = await InscripcionClase.findByPk(id);

    if (!i) return res.status(404).json({ error: 'Inscripción no encontrada' });

    res.json({
      id: i.idInscripcion,
      idMiembro: i.idMiembro,
      idClase: i.idClase,
      fechaInscripcion: i.fecha_inscripcion,
      asistio: i.asistio
    });
  } catch (error) {
    console.error('Error al obtener inscripción:', error);
    res.status(500).json({ error: 'Error al obtener la inscripción' });
  }
};
