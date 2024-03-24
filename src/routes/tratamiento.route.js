import express from 'express';
import TratamientoService from '../services/tratamiento.service.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import {
  createTratamientoSchema,
  updateTratamientoSchema,
  getTratamientoSchema,
} from '../validations_schemas/tratamiento.schema.js';
import passport from 'passport';
import { checkAdminRole } from '../middlewares/auth.handler.js';

const router = express.Router();
const service = new TratamientoService();

// Get all Tratamientos
router.get('/', async (req, res, next) => {
  try {
    const tratamientoList = await service.findAll();
    res.json(tratamientoList);
  } catch (error) {
    next(error);
  }
});

// Get Tratamiento By ID
router.get(
  '/:id',
  validatorHandler(getTratamientoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const tratamiento = await service.findByID(id);
      res.json(tratamiento);
    } catch (error) {
      next(error);
    }
  },
);

// Create Tratamiento
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createTratamientoSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newTratamiento = await service.create(data);
      res.status(201).json(newTratamiento);
    } catch (error) {
      next(error);
    }
  },
);

// Update Tratamiento
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getTratamientoSchema, 'params'),
  validatorHandler(updateTratamientoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedTratamiento = await service.update(id, data);
      res.json(updatedTratamiento);
    } catch (error) {
      next(error);
    }
  },
);

// Delete Tratamiento
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getTratamientoSchema, 'params'),
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
