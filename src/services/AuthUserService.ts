import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import HashProvider from '../providers/HashProvider';
import AppError from '../errors/AppError';
import authConfig from '../config/auth';

const prisma = new PrismaClient();
const hashProvider = new HashProvider();

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

class AuthUserService {
  public async execute({ email, password }: Request): Promise<Response | null> {
    const user = await prisma.user.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Wrong email/password combination', 401);
    }

    const passwordMatches = await hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatches) {
      throw new AppError('Wrong email/password combination', 401);
    }

    const { expiresIn, secret } = authConfig.config;

    console.log(secret, process.env.JWT_SECRET);

    const token = sign(
      {
        user: {
          id: user.id,
          email: user.email,
        },
      },
      secret,
      {
        expiresIn,
      },
    );
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}

export default AuthUserService;
