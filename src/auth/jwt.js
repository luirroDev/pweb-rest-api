import jwt from 'jsonwebtoken';
import { config } from '../database/config.js';

export function signToken(user) {
  const payload = {
    sub: user.id,
    role: user.role,
  };

  const secret = config.jwtSecret;
  const token = jwt.sign(payload, secret);

  return token;
}
