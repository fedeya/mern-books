import { Router } from 'express';
import { getUsers, createUser } from '../controllers/user.controller';

import multer from '../lib/multer';

const router = Router();

router.route('/')
  .get(getUsers)
  .post(multer.single('avatar'), createUser);

router.route('/:id')
  .get()
  .put()
  .delete();

export default router;