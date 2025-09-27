const express = require('express');
const router = express.Router();
const InscripcionClase = require('../../../models/inscripcionClase');


// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await InscripcionClase.destroy({ where: { idInscripcion: id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Inscripción no encontrada.' });
    }
  } catch (error) {
    console.error('Error al eliminar inscripción:', error);
    res.status(500).json({ error: 'Error al eliminar la inscripción.' });
  }
});

module.exports = router;