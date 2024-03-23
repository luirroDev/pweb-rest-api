import { ValidationError } from 'sequelize';

// Función para manejar errores generales
export function errorHandler(err, req, res, next) {
  /* Envía una respuesta con el código de estado 500
  y un mensaje de error */
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Función para manejar errores específicos de Boom
export function boomErrorHandler(err, req, res, next) {
  // Comprueba si el error es una instancia de Boom
  if (err.isBoom) {
    /* Si es así, extrae la salida del error y envía
    una respuesta con el código de estado y el payload */
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    /* Si no es un error de Boom, pasa el error al siguiente
    middleware de manejo de errores */
    next(err);
  }
}

// Función para manejar errores de validación de Sequelize
export function ormErrorHandler(err, req, res, next) {
  /* Comprueba si el error es una instancia de
  ValidationError de Sequelize */
  if (err instanceof ValidationError) {
    /* Si es así, envía una respuesta con el código
    de estado 409 y un mensaje de error personalizado */
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors[0].message,
    });
  }
  /* Si no es un error de validación de Sequelize,
  pasa el error al siguiente middleware de manejo de errores */
  next(err);
}
