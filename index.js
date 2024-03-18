import express from 'express';
import { config } from './src/database/config.js';

const app = express();
const port = config.port;

import './src/database/sequelize.js';

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
