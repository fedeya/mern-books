import { Router } from 'express';

import users from './users';
import auth from './auth';
import books from './books';

const router = Router();

// routes
router.use('/users', users);
router.use('/auth', auth);
router.use('/books', books);

export default router;