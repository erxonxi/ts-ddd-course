import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { JWTEncrypt } from '../../../../Contexts/Mooc/Users/infrastructure/encrypt/JWTEncrypt';

interface RequestLogged extends Request {
  token: string;
  user_id: string;
}

export class ProtectedController {
  async loggedMiddleware(req: RequestLogged, res: Response): Promise<void> {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined' && !bearerHeader.includes('undefined')) {
      //split the space at the bearer
      const bearer = bearerHeader.split(' ');
      //Get token from string
      const bearerToken = bearer[1];

      const jwt = new JWTEncrypt();
      const payload = jwt.verify(bearerToken);

      //set the token
      req.token = bearerToken;
      req.user_id = payload['user_id'];
    } else {
      res.sendStatus(httpStatus.FORBIDDEN);
    }
  }
}
