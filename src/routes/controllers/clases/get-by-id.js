const Clase = require('../../../models/clase');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const c = await Clase.findByPk(id);
    if (!c) return res.status(404).json({ error: 'Clase no encontrada' });

    res.json({
      id: c.idClase,
      nombre: c.nombre,
      descripcion: c.descripcion || 'No informado',
      horario: c.horario,
      diaSemana: c.dia_semana,
      duracionMin: c.duracion_min,
      capacidadMax: c.capacidad_max,
      activa: c.activa
    });
  } catch (error) {
    console.error('Error al obtener clase:', error);
    res.status(500).json({ error: 'No se pudo obtener la clase' });
  }
};
