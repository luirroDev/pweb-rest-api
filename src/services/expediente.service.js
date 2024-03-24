import boom from '@hapi/boom';
import { models } from '../database/sequelize.js';

class ExpedienteService {
  async create(data) {
    const newData = await models.Expediente.create(data);
    return newData;
  }

  async addTratamiento(data) {
    const newData = await models.ExpedienteTratamiento.create(data);
    return newData;
  }

  async findAll() {
    const dataList = await models.Expediente.findAll();
    return dataList;
  }

  async findByID(id) {
    const data = await models.Expediente.findByPk(id, {
      include: ['ordenes-ingreso', 'tratamientos'],
    });
    if (!data) {
      throw boom.notFound('expediente no encontrado');
    }
    return data;
  }

  async update(id, dataChanges) {
    const dataToUpdate = await this.findByID(id);
    const dataUpdated = await dataToUpdate.update(dataChanges);
    return dataUpdated;
  }

  async delete(id) {
    const expedienteToDelete = await this.findByID(id);
    await expedienteToDelete.destroy();
    return {
      status: 200,
      message: 'expediente eliminado exitosamente',
      id: id,
    };
  }
}

export default ExpedienteService;
