const Membresia = require('../../../models/membresia');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const m = await Membresia.findByPk(id);
    if (!m) return res.status(404).json({ error: 'Membresía no encontrada' });

    res.json({
      id: m.idMembresia,
      nombre: m.nombre,
      descripcion: m.descripcion || 'No informada',
      precioMensual: m.precio_mensual,
      duracionDias: m.duracion_dias,
      activa: m.activa
    });
  } catch (error) {
    console.error('Error al obtener membresía:', error);
    res.status(500).json({ error: 'No se pudo obtener la membresía' });
  }
};
