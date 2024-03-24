import { Model, DataTypes } from 'sequelize';
import { EXPEDIENTE_TABLE } from './ExpedienteMedico.model.js';
import { TRATAMIENTO_TABLE } from './Tratamiento.model.js';

export const EXPEDIENTE_TRATAMIENTO_TABLE = 'expediente_tratamiento';

export const ExpedienteTratamientoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  tratamientoId: {
    field: 'tratamiento_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    preferences: {
      model: TRATAMIENTO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

export class ExpedienteTratamiento extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXPEDIENTE_TRATAMIENTO_TABLE,
      modelName: 'ExpedienteTratamiento',
      timestamps: false,
    };
  }
}
