import boom from '@hapi/boom';

// Función que crea un middleware de validación
export function validatorHandler(schema, property) {
  return (req, res, next) => {
    // Obtiene los datos de la propiedad especificada (por ejemplo, req.body)
    const data = req[property];

    // Realiza la validación de los datos utilizando el esquema de Joi proporcionado
    const { error } = schema.validate(data, { abortEarly: false });

    // Si hay un error de validación, se lanza un error con el mensaje de error
    if (error) {
      next(boom.badRequest(error));
    }

    // Si no hay errores, se llama a la siguiente función middleware en la cadena
    next();
  };
}
