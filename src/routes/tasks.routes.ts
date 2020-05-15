import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
const router = Router();

const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
  const tasks = await prisma.task.findMany();
  return response.json({ data: tasks })
})


router.post("/", async (request: Request, response: Response) => {
  const { title, description, priority } = request.body;
  const task = await prisma.task.create({
    data: {
      title, description, priority
    }
  });
  return response.json({ data: task })
})


export default router
