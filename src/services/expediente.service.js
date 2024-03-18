import boom from '@hapi/boom';
import { models } from '../database/sequelize.js';

class ExpedienteService {
  async create(data) {
    return await models.Expediente.create(data);
  }

  async find() {
    return await models.Expediente.findAll();
  }

  async findByID(id) {
    const expediente = await models.Expediente.findByPk(id);
    if (!expediente) {
      throw boom.notFound('expediente no encontrado');
    }
    return expediente;
  }

  async update(id, dataChanges) {
    const expedienteToUpdate = await this.findByID(id);
    return await expedienteToUpdate.update(dataChanges);
  }

  async delete(id) {
    const expedienteToDelete = await this.findByID(id);
    await expedienteToDelete.destroy();
    return {
      status: 200,
      message: 'Expediente eliminado exitosamente',
      id: id,
    };
  }
}

export default ExpedienteService;
