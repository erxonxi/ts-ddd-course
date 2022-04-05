import { JWTConfigFactory } from './JWTConfigFactory';
import jwt from 'jsonwebtoken';

export class JWTEncrypt {
  private secret: string;

  constructor() {
    const config = JWTConfigFactory.createConfig();
    this.secret = config.secret;
  }

  encrypt(data: object): string {
    return jwt.sign(data, this.secret, { expiresIn: 60 * 60 * 24 });
  }

  verify(token: string): any {
    try {
      return jwt.verify(token, this.secret);
    } catch {
      return false;
    }
  }
}
