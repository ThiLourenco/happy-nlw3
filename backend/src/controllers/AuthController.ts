import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({
      where: { email: email}
    });

    // se email estiver incorreto
    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password_pass);

    // se senha estiver incorreta
    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    // se não cair em nenhuma das condições será autenticado gerando token
    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN, { expiresIn: '2h' });

    delete user.password_pass;

    return res.json({
      user,
      token,
    });
  }
  
}

export default new AuthController();