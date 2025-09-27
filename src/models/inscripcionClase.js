const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const InscripcionClase = sequelize.define('InscripcionClase', {
  idInscripcion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'idInscripcion'
  },
  idMiembro: {                
      type: DataTypes.INTEGER,
      allowNull: false
    },
  idClase: {                
      type: DataTypes.INTEGER,
      allowNull: false
    },

  fecha_inscripcion: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  asistio: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'InscripcionesClases',
  timestamps: false
});

module.exports = InscripcionClase;