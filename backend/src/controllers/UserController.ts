import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import userView from '../views/user_view';
import User from '../models/User';

class UserController {
  index(req: Request, res: Response) {
    return res.send({ userID: req.userId });
  }

  async create(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    const userRepository = getRepository(User)

    const userExists = await userRepository.findOne({
      where: { email: email}
    });

    if (userExists) {
      return response.status(409).json({
        error: 'User already exists'
      })
    }

    const user = userRepository.create({
      name,
      email,
      password_pass: password,
      admin
    });

    await userRepository.save(user);

    return response.status(201).json(userView.render(user))
  }
}

export default new UserController();