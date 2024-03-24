import Joi from 'joi';

const id = Joi.number().integer().positive();
const nombre = Joi.string().min(3).max(30);
const ci = Joi.string().length(11);
const sexo = Joi.string().valid('M', 'F');
const direccion = Joi.string().max(255);
const enfermedades = Joi.string().max(500);
const expedienteId = Joi.number().integer().positive();
const tratamientoId = Joi.number().integer().positive();

export const createExpedienteSchema = Joi.object({
  nombre: nombre.required(),
  ci: ci.required(),
  sexo: sexo.required(),
  enfermedades: enfermedades.required(),
  direccion,
});

export const updateExpedienteSchema = Joi.object({
  nombre,
  sexo,
  enfermedades,
  direccion,
});

export const getExpedienteSchema = Joi.object({
  id: id.required(),
});

export const addExpedienteToTratamientoSchema = Joi.object({
  expedienteId: expedienteId.required(),
  tratamientoId: tratamientoId.required(),
});
