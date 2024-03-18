import express from 'express';
import { config } from './src/database/config.js';

const app = express();
const port = config.port;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
