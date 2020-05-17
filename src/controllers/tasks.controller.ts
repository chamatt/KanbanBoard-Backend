import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
const prisma = new PrismaClient();

class TaskController {
  public async index(request: Request, response: Response) {
    try {
      const tasks = await prisma.task.findMany();
      return response.json({ data: tasks });
    } catch (err) {
      return response.status(err.statusCode).json({ message: err.message });
    }
  }
  public async store(request: Request, response: Response) {
    try {
      const { title, description, priority } = request.body;
      const task = await prisma.task.create({
        data: {
          title,
          description,
          priority,
        },
      });
      return response.json({ data: task });
    } catch (err) {
      return response.status(err.statusCode).json({ message: err.message });
    }
  }
}

export default TaskController;
