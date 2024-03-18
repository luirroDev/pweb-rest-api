import express from 'express';
import routerAPI from './src/routes/index.js';
import { config } from './src/database/config.js';

const app = express();
const port = config.port;

// Configuración de middleware
app.use(express.json());

// Rutas
routerAPI(app);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
