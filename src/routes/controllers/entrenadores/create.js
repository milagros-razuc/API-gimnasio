const entrenador = require('../../../models/entrenador');

module.exports = async (req, res) => {
  try {
    const { nombre, email, telefono, especialidad, activo } = req.body;

    const nuevoEntrenador = await entrenador.create({
      nombre,
      email,
      telefono,
      especialidad,
      activo
    });

    res.status(201).json({
      message: 'Entrenador creado exitosamente',
      entrenador: nuevoEntrenador
    });
  } catch (error) {
    console.error('Error al crear entrenador:', error);
    res.status(500).json({ error: 'No se pudo crear el entrenador' });
  }
};
