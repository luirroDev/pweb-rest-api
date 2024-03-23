import Joi from 'joi';

const id = Joi.number().integer().positive();
const medicamento = Joi.string().min(3).max(255);
const aplicacion = Joi.string().min(3).max(500);
const edad = Joi.number().integer().positive();

export const createTratamientoSchema = Joi.object({
  medicamento: medicamento.required(),
  aplicacion: aplicacion.required(),
  edad: edad.required(),
});

export const updateTratamientoSchema = Joi.object({
  medicamento,
  aplicacion,
  edad,
});

export const getTratamientoSchema = Joi.object({
  id: id.required(),
});
