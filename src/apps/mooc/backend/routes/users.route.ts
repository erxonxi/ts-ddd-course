import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';

import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isUUID(),
    body('username').exists().isString(),
    body('email').exists().isString(),
    body('password').exists().isString()
  ];

  const usersPostSingUpController = container.get('Apps.mooc.controllers.UsersPostSingUpController');
  router.post('/users/singup', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    usersPostSingUpController.run(req, res)
  );
};
