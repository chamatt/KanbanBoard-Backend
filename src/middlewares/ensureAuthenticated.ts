import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): any {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    const error = new AppError('JWT token is missing', 401);
    return response.status(error.statusCode).json({ message: error.message });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.config.secret);

    const { sub } = decoded as ITokenPayload;

    request['user'] = {
      id: sub,
    };

    return next();
  } catch {
    const error = new AppError('Invalid JWT token', 401);
    return response.status(error.statusCode).json({ message: error.message });
  }
}
