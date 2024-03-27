import express from 'express';
import passport from 'passport';
import userService from '../services/user.service.js';
import { signToken } from '../auth/jwt.js';

const router = express.Router();
const userSrv = new userService();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const access_token = signToken(user);
      res.json({
        access_token,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const userId = req.user.sub;
      const user = await userSrv.findOne(userId);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
