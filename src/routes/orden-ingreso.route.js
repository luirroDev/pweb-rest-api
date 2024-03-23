import express from 'express';
import OrdenIngresoService from '../services/orden-ingreso.service.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import {
  createOrdenIngresoSchema,
  updateOrdenIngresoSchema,
  getOrdenIngresoSchema,
} from '../validations_schemas/orden-ingreso.schema.js';

const router = express.Router();
const service = new OrdenIngresoService();

// Get all Ordenes de Ingreso
router.get('/', async (req, res, next) => {
  try {
    const ordenIngresoList = await service.findAll();
    res.json(ordenIngresoList);
  } catch (error) {
    next(error);
  }
});

// Get Orden de Ingreso By ID
router.get(
  '/:id',
  validatorHandler(getOrdenIngresoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const ordenIngreso = await service.findByID(id);
      res.json(ordenIngreso);
    } catch (error) {
      next(error);
    }
  },
);

// Create Orden de Ingreso
router.post(
  '/',
  validatorHandler(createOrdenIngresoSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newOrdenIngreso = await service.create(data);
      res.status(201).json(newOrdenIngreso);
    } catch (error) {
      next(error);
    }
  },
);

// Update Orden de Ingreso
router.patch(
  '/:id',
  validatorHandler(getOrdenIngresoSchema, 'params'),
  validatorHandler(updateOrdenIngresoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedOrdenIngreso = await service.update(id, data);
      res.json(updatedOrdenIngreso);
    } catch (error) {
      next(error);
    }
  },
);

// Delete Orden de Ingreso
router.delete(
  '/:id',
  validatorHandler(getOrdenIngresoSchema, 'params'),
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
