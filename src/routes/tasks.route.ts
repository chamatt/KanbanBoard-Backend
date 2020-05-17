import { Router, Request, Response } from 'express';
import TaskController from '../controllers/tasks.controller';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const taskController = new TaskController();
const router = Router();

router.get('/', ensureAuthenticated, taskController.index);
router.post('/', ensureAuthenticated, taskController.store);

export default router;
