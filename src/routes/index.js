import { Router } from 'express';
import expedientesRouter from './expediente.route.js';
import ordenIngresoRouter from './orden-ingreso.route.js';

function routerAPI(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/expedientes', expedientesRouter);
  router.use('/orden-ingreso', ordenIngresoRouter);
}

export default routerAPI;
