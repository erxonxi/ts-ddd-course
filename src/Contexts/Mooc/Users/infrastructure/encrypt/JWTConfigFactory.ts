import JWTConfig from '../../../../Shared/infrastructure/encrypt/JWTConfig';
import config from '../../../Shared/infrastructure/config';

export class JWTConfigFactory {
  static createConfig(): JWTConfig {
    return {
      secret: config.get('jwt.secret')
    };
  }
}
