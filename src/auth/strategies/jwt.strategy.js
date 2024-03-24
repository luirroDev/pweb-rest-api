import { Strategy, ExtractJwt } from 'passport-jwt';
import { config } from '../../database/config.js';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

export const JWTStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});
