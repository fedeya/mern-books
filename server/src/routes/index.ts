import { Router } from 'express';

import user from './users';
import auth from './auth';

const router = Router();

// routes
router.use('/users', user);
router.use('/auth', auth);

export default router;