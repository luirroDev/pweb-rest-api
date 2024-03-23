import { Router } from 'express';
import expedientesRouter from './expediente.route.js';
import ordenIngresoRouter from './orden-ingreso.route.js';
import tratamientoRouter from './tratamiento.route.js';

function routerAPI(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/expedientes', expedientesRouter);
  router.use('/orden-ingreso', ordenIngresoRouter);
  router.use('/tratamiento', tratamientoRouter);
}

export default routerAPI;
