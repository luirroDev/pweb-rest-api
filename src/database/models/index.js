import { Expediente, ExpedienteSchema } from './ExpedienteMedico.model.js';
import { OrdenIngreso, OrdenIngresoSchema } from './OrdenIngreso.model.js';

export function setupModels(sequelize) {
  return {
    Expediente: Expediente.init(ExpedienteSchema, Expediente.config(sequelize)),
    OrdenIngreso: OrdenIngreso.init(
      OrdenIngresoSchema,
      OrdenIngreso.config(sequelize),
    ),
  };
}
