import { Model, DataTypes } from 'sequelize';
import { EXPEDIENTE_TABLE } from './ExpedienteMedico.model.js';

export const ORDEN_INGRESO_TABLE = 'orden_ingreso';

export const OrdenIngresoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  motivo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  sintomas: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  expedienteId: {
    field: 'expediente_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    preferences: {
      model: EXPEDIENTE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

export class OrdenIngreso extends Model {
  static associate(models) {
    this.belongsTo(models.Expediente, { as: 'expediente' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDEN_INGRESO_TABLE,
      modelName: 'OrdenIngreso',
      timestamps: false,
    };
  }
}
