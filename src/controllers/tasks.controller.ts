import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
const prisma = new PrismaClient();

class TaskController {
  public async index(request: Request, response: Response) {
    const tasks = await prisma.task.findMany();
    return response.json({ data: tasks });
  }
  public async create(request: Request, response: Response) {
    const { title, description, priority } = request.body;
    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority,
      },
    });
    return response.json({ data: task });
  }
}

export default TaskController;
