import express from 'express';
import ExpedienteService from '../services/expediente.service.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import {
  createExpedienteSchema,
  getExpedienteSchema,
  updateExpedienteSchema,
} from '../validations_schemas/expediente.schema.js';

const router = express.Router();
const service = new ExpedienteService();

// Get all Expedientes
router.get('/', async (req, res, next) => {
  try {
    const expedienteList = await service.findAll();
    console.log(expedienteList);
    res.json(expedienteList);
  } catch (error) {
    next(error);
  }
});

// Get Expediente By ID
router.get(
  '/:id',
  validatorHandler(getExpedienteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const expediente = await service.findByID(id);
      res.json(expediente);
    } catch (error) {
      next(error);
    }
  },
);

// Create Expediente
router.post(
  '/',
  validatorHandler(createExpedienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newExpediente = await service.create(data);
      res.status(201).json(newExpediente);
    } catch (error) {
      next(error);
    }
  },
);

// Update Expdiente
router.patch(
  '/:id',
  validatorHandler(getExpedienteSchema, 'params'),
  validatorHandler(updateExpedienteSchema, 'boddy'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedExpediente = await service.update(id, data);
      res.json(updatedExpediente);
    } catch (error) {
      next(error);
    }
  },
);

// Delete Expediente
router.delete(
  '/:id',
  validatorHandler(getExpedienteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await service.delete(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
