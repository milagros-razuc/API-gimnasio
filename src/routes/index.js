const express = require('express');
const router = express.Router();

// === MIEMBROS ===
const crearMiembro = require('./controllers/miembros/create');
const updateMiembro = require('./controllers/miembros/update');
const deleteMiembro = require('./controllers/miembros/delete');
const getAllMiembros = require('./controllers/miembros/get-all');
const getMiembroById = require('./controllers/miembros/get-by-id');
const getMiembrosFiltered = require('./controllers/miembros/getFiltered');



// === ENTRENADORES ===
const crearEntrenador = require('./controllers/entrenadores/create');
const updateEntrenador = require('./controllers/entrenadores/update');
const deleteEntrenador = require('./controllers/entrenadores/delete');
const getAllEntrenadores = require('./controllers/entrenadores/get-all');
const getEntrenadorById = require('./controllers/entrenadores/get-by-id');

// === CLASES ===
const crearClase = require('./controllers/clases/create');
const updateClase = require('./controllers/clases/update');
const deleteClase = require('./controllers/clases/delete');
const getAllClases = require('./controllers/clases/get-all');
const getClaseById = require('./controllers/clases/get-by-id');

// === MEMBRESÍAS ===
const crearMembresia = require('./controllers/membresias/create');
const updateMembresia = require('./controllers/membresias/update');
const deleteMembresia = require('./controllers/membresias/delete');
const getAllMembresias = require('./controllers/membresias/get-all');
const getMembresiaById = require('./controllers/membresias/get-by-id');

// === INSCRIPCIONES ===
const crearInscripcion = require('./controllers/inscripciones/create');
const updateInscripcion = require('./controllers/inscripciones/update');
const deleteInscripcion = require('./controllers/inscripciones/delete');
const getAllInscripciones = require('./controllers/inscripciones/get-all');
const getInscripcionById = require('./controllers/inscripciones/get-by-id');


// --- Rutas para MIEMBROS ---
router.post('/miembros', crearMiembro);
router.get('/miembros/filtro', getMiembrosFiltered);
router.put('/miembros/:id', updateMiembro);
router.delete('/miembros/:id', deleteMiembro);
router.get('/miembros', getAllMiembros);
router.get('/miembros/:id', getMiembroById);




// --- Rutas para ENTRENADORES ---
router.post('/entrenadores', crearEntrenador);
router.put('/entrenadores/:id', updateEntrenador);
router.delete('/entrenadores/:id', deleteEntrenador);
router.get('/entrenadores', getAllEntrenadores);
router.get('/entrenadores/:id', getEntrenadorById);

// --- Rutas para CLASES ---
router.post('/clases', crearClase);
router.put('/clases/:id', updateClase);
router.delete('/clases/:id', deleteClase);
router.get('/clases', getAllClases);
router.get('/clases/:id', getClaseById);

// --- Rutas para MEMBRESÍAS ---
router.post('/membresias', crearMembresia);
router.put('/membresias/:id', updateMembresia);
router.delete('/membresias/:id', deleteMembresia);
router.get('/membresias', getAllMembresias);
router.get('/membresias/:id', getMembresiaById);

// --- Rutas para INSCRIPCIONES ---
router.post('/inscripciones', crearInscripcion);
router.put('/inscripciones/:id', updateInscripcion);
router.delete('/inscripciones/:id', deleteInscripcion);
router.get('/inscripciones', getAllInscripciones);
router.get('/inscripciones/:id', getInscripcionById);

module.exports = router;
