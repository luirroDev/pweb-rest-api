import express from 'express';
import routerAPI from './src/routes/index.js';
import {
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
} from './src/middlewares/error.handler.js';
import { config } from './src/database/config.js';

const app = express();
const port = config.port;

// Configuración de middlewares
import './src/auth/index.js';
app.use(express.json());

// Rutas
routerAPI(app);

// Gestión de errores
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
