import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
import AuthUserService from '../services/AuthUserService';
const prisma = new PrismaClient();
const authUser = new AuthUserService();

class AuthController {
  public async store(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const user = await authUser.execute({
        email,
        password,
      });

      return response.json(user);
    } catch (err) {
      return response.status(err.statusCode).json({ message: err.message });
    }
  }
}

export default AuthController;
