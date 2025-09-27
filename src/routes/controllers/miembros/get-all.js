const Miembro = require('../../../models/miembro');

module.exports = async (req, res) => {
  try {
    const miembros = await Miembro.findAll();

    const miembrosFormateados = miembros.map(m => ({
      id: m.idMiembro,
      nombre: m.nombre,
      email: m.email || 'No informado',
      telefono: m.telefono || 'No informado',
      idMembresia: m.idMembresia,
      fechaRegistro: m.fecha_registro || 'No registrado',
      fechaInicioMembresia: m.fecha_inicio_membresia || 'No informado',
      fechaFinMembresia: m.fecha_fin_membresia || 'No informado',
      activo: m.activo ? true : false
    }));

    // Devolvemos JSON
    res.json(miembrosFormateados);
  } catch (error) {
    console.error('Error al obtener miembros:', error);
    res.status(500).json({ error: 'No se pudo cargar la lista de miembros' });
  }
};


