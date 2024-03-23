import { Expediente, ExpedienteSchema } from './ExpedienteMedico.model.js';
import { OrdenIngreso, OrdenIngresoSchema } from './OrdenIngreso.model.js';
import { Tratamiento, TratamientoSchema } from './Tratamiento.model.js';
import { User, UserSchema } from './User.model.js';

export function setupModels(sequelize) {
  return {
    Expediente: Expediente.init(ExpedienteSchema, Expediente.config(sequelize)),
    OrdenIngreso: OrdenIngreso.init(
      OrdenIngresoSchema,
      OrdenIngreso.config(sequelize),
    ),
    Tratamiento: Tratamiento.init(
      TratamientoSchema,
      Tratamiento.config(sequelize),
    ),
    User: User.init(UserSchema, User.config(sequelize)),
  };
}
