const InscripcionClase = require('../../../models/inscripcionClase');

module.exports = async (req, res) => {
  try {
    const { idMiembro, idClase, fecha_inscripcion, asistio } = req.body;

    // Validación básica
    if (!idMiembro || !idClase) {
      return res.status(400).json({ error: 'idMiembro y idClase son obligatorios' });
    }

    const nuevaInscripcion = await InscripcionClase.create({
      idMiembro,
      idClase,
      fecha_inscripcion,
      asistio
    });

    res.status(201).json({
      message: 'Inscripción creada exitosamente',
      inscripcion: nuevaInscripcion
    });
  } catch (error) {
    console.error('Error al crear inscripción:', error);
    res.status(500).json({ error: 'No se pudo crear la inscripción' });
  }
};
