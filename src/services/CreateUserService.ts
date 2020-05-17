import { PrismaClient, UserSelect } from '@prisma/client';
import HashProvider from '../providers/HashProvider';
import AppError from '../errors/AppError';
const prisma = new PrismaClient();

const hashProvider = new HashProvider();

interface Request {
  name: string;
  email: string;
  password: string;
}

interface Response {
  name: string;
  email: string;
  id: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: Request): Promise<Response | null> {
    const userAlreadyExists = await prisma.user.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new AppError('Email address is already taken', 400);
    }

    const hashedPassword = await hashProvider.generateHash(password);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const newUser = await prisma.user.findOne({
      where: { email },
      select: {
        name: true,
        email: true,
        id: true,
      },
    });

    return newUser;
  }
}

export default CreateUserService;
