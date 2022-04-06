import { Response } from 'express';
import httpStatus from 'http-status';

import { ShopCreator } from '../../../../../Contexts/Mooc/Shops/application/ShopCreator';
import { Controller } from '../Controller';
import { ProtectedController, RequestLogged } from '../ProtectedController';

export class ShopPutController extends ProtectedController implements Controller {
  constructor(private ShopCreator: ShopCreator) {
    super();
  }

  async run(req: RequestLogged, res: Response) {
    this.loggedMiddleware(req, res);
    const { id, name, description } = req.body;

    await this.ShopCreator.run({ id, name, description, assinged_user_id: req.user_id });

    res.status(httpStatus.CREATED).send();
  }
}
