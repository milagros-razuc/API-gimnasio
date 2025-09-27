const Miembro = require('../../../models/miembro');
const { Op, fn, col, where, Sequelize } = require('sequelize');

const getMiembrosFiltered = async (req, res) => {
  try {
    const {
      idMiembro,
      nombre,
      email,
      telefono,
      idMembresia,
      fecha_registro,
      fecha_inicio_membresia,
      fecha_fin_membresia,
      activo
    } = req.query;

    const condiciones = [];

    if (idMiembro) condiciones.push({ idMiembro });
    if (nombre) {
      condiciones.push(where(fn('LOWER', col('nombre')), { [Op.like]: `%${nombre.toLowerCase()}%` }));
    }
    if (email) {
      condiciones.push(where(fn('LOWER', col('email')), { [Op.like]: `%${email.toLowerCase()}%` }));
    }
    if (telefono) {
      condiciones.push(where(fn('LOWER', col('telefono')), { [Op.like]: `%${telefono.toLowerCase()}%` }));
    }
    if (idMembresia) condiciones.push({ idMembresia });
    if (fecha_registro) condiciones.push({ fecha_registro });
    if (fecha_inicio_membresia) condiciones.push({ fecha_inicio_membresia });
    if (fecha_fin_membresia) condiciones.push({ fecha_fin_membresia });
    if (activo !== undefined) condiciones.push({ activo: activo === 'true' });

    const whereMiembro = condiciones.length ? { [Op.and]: condiciones } : {};

    const miembros = await Miembro.findAll({ where: whereMiembro });

    const miembrosFormateados = miembros.map(m => ({
      id: m.idMiembro,
      nombre: m.nombre,
      email: m.email || 'No informado',
      telefono: m.telefono || 'No informado',
      idMembresia: m.idMembresia || null,
      fechaRegistro: m.fecha_registro,
      fechaInicioMembresia: m.fecha_inicio_membresia,
      fechaFinMembresia: m.fecha_fin_membresia,
      activo: m.activo
    }));

    res.json(miembrosFormateados);
  } catch (error) {
    console.error('Error al filtrar miembros:', error);
    res.status(500).json({ error: 'No se pudo filtrar los miembros' });
  }
};

module.exports = getMiembrosFiltered;
