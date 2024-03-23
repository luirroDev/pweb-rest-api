import { Model, DataTypes } from 'sequelize';

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
    type: DataTypes.DATE,
  },
};

export class OrdenIngreso extends Model {
  static associate() {
    //associate
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
