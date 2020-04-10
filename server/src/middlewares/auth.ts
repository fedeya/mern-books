import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
  user: {
    id: string;
  };
  iat: number;
  exp: number;
}

export default function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if(!token) {
    res.status(403).json({ msg: 'no token, invalid permissions' });
    return 
  }

  try {
    const encrypted = jwt.verify(token, process.env.SECRET as string) as IPayload;
    req.user = encrypted.user;
    next();
  } catch(err) {
    res.status(403).json({ msg: 'invalid token' });
  }

}