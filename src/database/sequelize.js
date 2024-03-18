import { Sequelize } from 'sequelize';
import { config } from './config.js';
import { setupModels } from './models/index.js';

const URI = config.dbUrl;

export const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: config.isProd ? false : false,
});

export const models = setupModels(sequelize);
sequelize.sync();
