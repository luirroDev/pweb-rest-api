import Joi from 'joi';

const id = Joi.number().integer().positive();
const nombrePaciente = Joi.string().min(3).max(30);
const CI = Joi.string().length(11);
const sexo = Joi.string().valid('M', 'F');
const direccion = Joi.string().max(255);
const enfermedades = Joi.string().max(500);

export const createExpedienteShema = Joi.object({
  nombrePaciente: nombrePaciente.required(),
  CI: CI.required(),
  sexo: sexo.required(),
  enfermedades: enfermedades.required(),
  direccion,
});

export const updateExpedienteShema = Joi.object({
  nombrePaciente,
  sexo,
  enfermedades,
  direccion,
});

export const getExpedienteShema = Joi.object({
  id: id.required(),
});
