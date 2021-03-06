import { Response } from 'express';
import { Controller } from '../Controller';
import httpStatus from 'http-status';

import { MeUser } from '../../../../../Contexts/Mooc/Users/application/MeUser';
import { ProtectedController, RequestLogged } from '../ProtectedController';

export class UsersGetMeController extends ProtectedController implements Controller {
  constructor(private meUser: MeUser) {
    super();
  }

  async run(req: RequestLogged, res: Response) {
    this.loggedMiddleware(req, res);

    const me = await this.meUser.run({ id: req.user_id });

    res.status(httpStatus.OK).json(me);
  }
}
