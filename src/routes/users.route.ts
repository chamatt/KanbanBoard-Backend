import { Router, Request, Response } from 'express';
import UsersController from '../controllers/users.controller';
const router = Router();

const usersController = new UsersController();

router.post('/', usersController.store);

export default router;
