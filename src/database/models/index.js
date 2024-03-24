import { Expediente, ExpedienteSchema } from './ExpedienteMedico.model.js';
import { OrdenIngreso, OrdenIngresoSchema } from './OrdenIngreso.model.js';
import { Tratamiento, TratamientoSchema } from './Tratamiento.model.js';
import { User, UserSchema } from './User.model.js';

export default function setupModels(sequelize) {
  Expediente.init(ExpedienteSchema, Expediente.config(sequelize));
  OrdenIngreso.init(OrdenIngresoSchema, OrdenIngreso.config(sequelize));
  Tratamiento.init(TratamientoSchema, Tratamiento.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  Expediente.associate(sequelize.models);
  OrdenIngreso.associate(sequelize.models);

  return { Expediente, OrdenIngreso, Tratamiento, User };
}
