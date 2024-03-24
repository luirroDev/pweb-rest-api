import { Strategy } from 'passport-local';
import boom from '@hapi/boom';
import UserService from '../../services/user.service.js';
import bcrypt from 'bcrypt';

const service = new UserService();

async function localStrategy(email, password, done) {
  try {
    const user = await service.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      done(boom.unauthorized(), false);
    }
    delete user.dataValues.password;
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}

export const LocalStrategy = new Strategy(
  { usernameField: 'email', passwordField: 'password' },
  localStrategy,
);
