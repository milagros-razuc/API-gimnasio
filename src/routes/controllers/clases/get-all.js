const Clase = require('../../../models/clase');

module.exports = async (req, res) => {
  try {
    const clases = await Clase.findAll();

    const clasesFormateadas = clases.map(c => ({
      id: c.idClase,
      nombre: c.nombre,
      descripcion: c.descripcion || 'No informado',
      horario: c.horario,
      diaSemana: c.dia_semana,
      duracionMin: c.duracion_min,
      capacidadMax: c.capacidad_max,
      activa: c.activa,
      idEntrenador:c.idEntrenador
    }));

    res.json(clasesFormateadas);
  } catch (error) {
    console.error('Error al obtener clases:', error);
    res.status(500).json({ error: 'No se pudo cargar la lista de clases' });
  }
};
