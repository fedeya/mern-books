import { Router } from 'express';
import user from './user';

const router = Router();

// routes
router.use('/users', user);

export default router;