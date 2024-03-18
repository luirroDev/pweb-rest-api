import { Expediente, ExpedienteSchema } from './ExpedienteMedico.model.js';

export function setupModels(sequelize) {
  return {
    Expediente: Expediente.init(ExpedienteSchema, Expediente.config(sequelize)),
  };
}
