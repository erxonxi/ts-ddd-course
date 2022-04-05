import { Request, Response } from 'express';
import { Controller } from './Controller';
import httpStatus from 'http-status';

import { SingUpUser } from '../../../../Contexts/Mooc/Users/application/SingUpUser';

export class UsersPostSingUpController implements Controller {
  constructor(private singUpUser: SingUpUser) {}

  async run(req: Request, res: Response) {
    const { id, username, email, password } = req.body;

    await this.singUpUser.run({ id, username, email, password });

    res.status(httpStatus.CREATED).send();
  }
}
