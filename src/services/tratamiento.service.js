import boom from '@hapi/boom';
import { models } from '../database/sequelize.js';

class TratamientoService {
  async create(data) {
    const newData = await models.Tratamiento.create(data);
    return newData;
  }

  async findAll() {
    const dataList = await models.Tratamiento.findAll();
    return dataList;
  }

  async findByID(id) {
    const data = await models.Tratamiento.findByPk(id);
    if (!data) {
      throw boom.notFound('Tratamiento no encontrado');
    }
    return data;
  }

  async update(id, dataChanges) {
    const dataToUpdate = await this.findByID(id);
    const dataUpdated = await dataToUpdate.update(dataChanges);
    return dataUpdated;
  }

  async delete(id) {
    const tratamientoToDelete = await this.findByID(id);
    await tratamientoToDelete.destroy();
    return {
      status: 200,
      message: 'Tratamiento eliminado exitosamente',
      id: id,
    };
  }
}

export default TratamientoService;
