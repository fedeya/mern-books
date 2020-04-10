import { Router } from 'express';
import { check } from 'express-validator'; 

import { Login } from '../controllers/auth.controller';

const router = Router();

router.route('/')
  .post([
    check('email', 'enter a valid email').isEmail(),
    check('password', 'the password at least of 6 characters').isLength({ min: 6 })
  ], Login)

export default router;
