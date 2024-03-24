import { Model, DataTypes } from 'sequelize';

export const TRATAMIENTO_TABLE = 'tratamiento';

export const TratamientoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  medicamento: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  aplicacion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  edad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

export class Tratamiento extends Model {
  static associate(models) {
    this.belongsToMany(models.Tratamiento, {
      as: 'expedientes',
      through: models.ExpedienteTratamiento,
      foreignKey: 'tratamientoId',
      otherKey: 'expedienteId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TRATAMIENTO_TABLE,
      modelName: 'Tratamiento',
      timestamps: false,
    };
  }
}
