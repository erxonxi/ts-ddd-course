import { Request, Response } from 'express';
import { Controller } from './Controller';
import httpStatus from 'http-status';

import { SingInUser } from '../../../../Contexts/Mooc/Users/application/SingInUser';

export class UsersPostSingInController implements Controller {
  constructor(private singInUser: SingInUser) {}

  async run(req: Request, res: Response) {
    const { email, password } = req.body;

    const { token } = await this.singInUser.run({ email, password });

    res.status(httpStatus.OK).json({ token });
  }
}
