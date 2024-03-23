import boom from '@hapi/boom';
import { models } from '../database/sequelize.js';
import bcrypt from 'bcrypt';

class UserService {
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    return users.map((user) => {
      const { password, ...userWithoutPassword } = user.dataValues;
      return userWithoutPassword;
    });
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    delete user.dataValues.password;
    return user;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email },
    });
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const userUpdated = await user.update(changes);
    return userUpdated;
  }

  async delete(id) {
    const user = await this.findOne(id);
    user.destroy();
    return { id };
  }
}

export default UserService;
