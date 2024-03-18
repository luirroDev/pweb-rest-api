import { Router } from 'express';
import expedientesRouter from './expediente.route.js';

function routerAPI(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/expedientes', expedientesRouter);
}

export default routerAPI;
