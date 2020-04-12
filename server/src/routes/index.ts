import { Router } from 'express';


import users from './users';
import auth from './auth';
import books from './books';

import authMiddleware from '../middlewares/auth';

const router = Router();

// routes
router.use('/users', users);
router.use('/auth', auth);
router.use('/books', authMiddleware, books);

export default router;