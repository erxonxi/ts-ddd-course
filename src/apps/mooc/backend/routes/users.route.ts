import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';

import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchemaSingUp = [
    body('id').exists().isUUID(),
    body('username').exists().isString(),
    body('email').exists().isString(),
    body('password').exists().isString()
  ];

  const reqSchemaSingIn = [body('email').exists().isString(), body('password').exists().isString()];

  const usersPostSingUpController = container.get('Apps.mooc.controllers.UsersPostSingUpController');
  router.post('/users/singup', reqSchemaSingUp, validateReqSchema, (req: Request, res: Response) =>
    usersPostSingUpController.run(req, res)
  );

  const usersPostSingInController = container.get('Apps.mooc.controllers.UsersPostSingInController');
  router.post('/users/singin', reqSchemaSingIn, validateReqSchema, (req: Request, res: Response) =>
    usersPostSingInController.run(req, res)
  );
};
