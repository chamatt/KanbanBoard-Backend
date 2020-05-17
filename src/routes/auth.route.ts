import { Router, Request, Response } from 'express';
import AuthController from '../controllers/auth.controller';

const authController = new AuthController();
const router = Router();

router.post('/', authController.store);

export default router;
