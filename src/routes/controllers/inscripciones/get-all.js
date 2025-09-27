const InscripcionClase = require('../../../models/inscripcionClase');

module.exports = async (req, res) => {
  try {
    const inscripciones = await InscripcionClase.findAll();

    const inscripcionesFormateadas = inscripciones.map(i => ({
      id: i.idInscripcion,
      idMiembro: i.idMiembro,
      idClase: i.idClase,
      fechaInscripcion: i.fecha_inscripcion,
      asistio: i.asistio
    }));

    res.json(inscripcionesFormateadas);
  } catch (error) {
    console.error('Error al obtener inscripciones:', error);
    res.status(500).json({ error: 'No se pudo cargar la lista de inscripciones' });
  }
};
