import Joi from 'joi';

const id = Joi.number().integer().positive();
const motivo = Joi.string().min(3).max(255);
const sintomas = Joi.string().min(3).max(500);
const fecha = Joi.date();

export const createOrdenIngresoSchema = Joi.object({
  motivo: motivo.required(),
  sintomas: sintomas.required(),
  fecha: fecha.required(),
});

export const updateOrdenIngresoSchema = Joi.object({
  motivo,
  sintomas,
  fecha,
});

export const getOrdenIngresoSchema = Joi.object({
  id: id.required(),
});
