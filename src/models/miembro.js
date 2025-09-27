const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Miembro = sequelize.define('Miembro', {
  idMiembro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'idMiembro'
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: true
  },

  idMembresia: {                
    type: DataTypes.INTEGER,
    allowNull: false
  },

  fecha_registro: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  fecha_inicio_membresia: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  fecha_fin_membresia: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'Miembros',
  timestamps: false
});

module.exports = Miembro;