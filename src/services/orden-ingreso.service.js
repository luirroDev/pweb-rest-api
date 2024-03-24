import boom from '@hapi/boom';
import { models } from '../database/sequelize.js';

class OrdenIngresoService {
  async create(data) {
    const newData = await models.OrdenIngreso.create(data);
    return newData;
  }

  async findAll() {
    const dataList = await models.OrdenIngreso.findAll({
      include: ['expediente'],
    });
    return dataList;
  }

  async findByID(id) {
    const data = await models.OrdenIngreso.findByPk(id);
    if (!data) {
      throw boom.notFound('Orden de Ingreso no encontrada');
    }
    return data;
  }

  async update(id, dataChanges) {
    const dataToUpdate = await this.findByID(id);
    const dataUpdated = await dataToUpdate.update(dataChanges);
    return dataUpdated;
  }

  async delete(id) {
    const ordenIngresoToDelete = await this.findByID(id);
    await ordenIngresoToDelete.destroy();
    return {
      status: 200,
      message: 'Orden de Ingreso eliminada exitosamente',
      id: id,
    };
  }
}

export default OrdenIngresoService;
