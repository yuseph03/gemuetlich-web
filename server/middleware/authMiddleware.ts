import { Request, Response, NextFunction } from 'express';
import { verifyJwtToken } from '../utils/verifyJwtToken';
import { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const user = await verifyJwtToken(token);
    req.user = user;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};


