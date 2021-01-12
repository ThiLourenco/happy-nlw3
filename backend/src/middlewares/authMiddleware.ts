import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// criando a tipagem para receber o payload
interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  } 

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.JWT_PUBLIC_KEY);
    const { id } = data as TokenPayload;

    // criado no express.d.ts um merge para tipar userId no Request do express
    req.userId = id;

    return next();

  } catch {
    return res.sendStatus(401);
  }

}