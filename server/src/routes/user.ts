import { Router } from 'express';
import { getUsers, createUser } from '../controllers/user.controller';
import { check } from 'express-validator';

import multer from '../lib/multer';

const router = Router();

router.route('/')
  .get(getUsers)
  .post(multer.single('avatar'), [
    check('name', 'the name is required').not().isEmpty(),
    check('email', 'enter a valid email').isEmail(),
    check('sex', 'enter a valid sex').isIn(['male', 'female']),
    check('password', 'the password at least 6 characters').isLength({ min: 6 })
  ], createUser);

router.route('/:id')
  .get()
  .put()
  .delete();

export default router;