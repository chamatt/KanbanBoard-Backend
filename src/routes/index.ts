import { Router } from 'express';
import tasksRouter from './tasks.route';
import authRouter from './auth.route';
import usersRouter from './users.route';

const router = Router();

router.use('/tasks', tasksRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

export default router;
