import express from 'express';
import passport from 'passport';
import { signToken } from '../auth/jwt.js';

const router = express.Router();

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

export default router;
