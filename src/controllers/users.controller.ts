import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
import CreateUserService from '../services/CreateUserService';
const prisma = new PrismaClient();
const createUser = new CreateUserService();

class UsersController {
  public async store(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const user = await createUser.execute({
        email,
        password,
        name,
      });

      return response.json(user);
    } catch (err) {
      return response.status(err.statusCode).json({ message: err.message });
    }
  }
}

export default UsersController;
