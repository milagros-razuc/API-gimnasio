
const Membresia = require('./membresia');
const Entrenador = require('./entrenador');
const Clase = require('./clase');
const Miembro = require('./miembro');
const InscripcionClase = require('./inscripcionClase');


Miembro.belongsTo(Membresia, { foreignKey: 'idMembresia' });
Membresia.hasMany(Miembro, { foreignKey: 'idMembresia' });

Clase.belongsTo(Entrenador, { foreignKey: 'idEntrenador' });
Entrenador.hasMany(Clase, { foreignKey: 'idEntrenador' });

InscripcionClase.belongsTo(Miembro, { foreignKey: 'idMiembro' });
InscripcionClase.belongsTo(Clase, { foreignKey: 'idClase' });

Miembro.hasMany(InscripcionClase, { foreignKey: 'idMiembro' });
Clase.hasMany(InscripcionClase, { foreignKey: 'idClase' });


module.exports = {
    Membresia,
    Entrenador,
    Clase,
    Miembro,
    InscripcionClase
};
