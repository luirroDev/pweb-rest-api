import { Router } from 'express';
import expedientesRouter from './expediente.route.js';
import ordenIngresoRouter from './orden-ingreso.route.js';
import tratamientoRouter from './tratamiento.route.js';
import userRouter from './user.route.js';
import authRouter from './auth.route.js';

function routerAPI(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/expedientes', expedientesRouter);
  router.use('/orden-ingreso', ordenIngresoRouter);
  router.use('/tratamientos', tratamientoRouter);
  router.use('/users', userRouter);
  router.use('/auth', authRouter);
}

export default routerAPI;
