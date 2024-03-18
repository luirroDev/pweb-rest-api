import express from 'express';
import ExpedienteService from '../services/expediente.service.js';

const router = express.Router();
const service = new ExpedienteService();

// Get all Expedientes
router.get('/', async (req, res, next) => {
  try {
    const expedientes = await service.find();
    res.json(expedientes);
  } catch (error) {
    next(error);
  }
});

export default router;
