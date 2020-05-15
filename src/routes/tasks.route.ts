import { Router, Request, Response } from 'express';
import TaskController from '../controllers/tasks.controller';

const taskController = new TaskController();
const router = Router();

router.get('/', taskController.index);
router.post('/', taskController.create);

export default router;
