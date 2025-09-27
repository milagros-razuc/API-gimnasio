const Membresia = require('../../../models/membresia');

module.exports = async (req, res) => {
  try {
    const membresias = await Membresia.findAll();

    const membresiasFormateadas = membresias.map(m => ({
      id: m.idMembresia,
      nombre: m.nombre,
      descripcion: m.descripcion || 'No informada',
      precioMensual: m.precio_mensual,
      duracionDias: m.duracion_dias,
      activa: m.activa
    }));

    res.json(membresiasFormateadas);
  } catch (error) {
    console.error('Error al obtener membresías:', error);
    res.status(500).json({ error: 'No se pudo cargar la lista de membresías' });
  }
};
