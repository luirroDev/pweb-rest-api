import { Model, DataTypes } from 'sequelize';

export const EXPEDIENTE_TABLE = 'expedientes';

export const ExpedienteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ci: {
    allowNull: false,
    type: DataTypes.STRING(11),
    unique: true,
  },
  sexo: {
    allowNull: false,
    type: DataTypes.STRING(1),
  },
  direccion: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  enfermedades: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

export class Expediente extends Model {
  static associate(models) {
    this.hasMany(models.OrdenIngreso, {
      as: 'ordenes-ingreso',
      foreignKey: 'expedienteId',
    });
    this.belongsToMany(models.Tratamiento, {
      as: 'tratamientos',
      through: models.ExpedienteTratamiento,
      foreignKey: 'expedienteId',
      otherKey: 'tratamientoId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXPEDIENTE_TABLE,
      modelName: 'Expediente',
      timestamps: false,
    };
  }
}
