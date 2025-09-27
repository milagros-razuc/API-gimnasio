const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Clase = sequelize.define('Clase', {
  idClase: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'idClase'
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  horario: {
    type: DataTypes.TIME,
    allowNull: false
  },
  dia_semana: {
    type: DataTypes.ENUM('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'),
    allowNull: false
  },
  duracion_min: {
    type: DataTypes.INTEGER,
    defaultValue: 60,
    validate: {
      min: 1
    }
  },
  capacidad_max: {
    type: DataTypes.INTEGER,
    defaultValue: 20,
    validate: {
      min: 1
    }
  },
  idEntrenador: {                
    type: DataTypes.INTEGER,
    allowNull: false
  },
  activa: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'Clases',
  timestamps: false
});

module.exports = Clase;