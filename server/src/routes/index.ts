import { Router } from 'express';
import user from './users';

const router = Router();

// routes
router.use('/users', user);

export default router;