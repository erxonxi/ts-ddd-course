import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { UserUsernameLengthExceeded } from './UserUsernameLengthExceeded';

export class UserUsername extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan30Characters(value);
  }

  private ensureLengthIsLessThan30Characters(value: string): void {
    if (value.length > 30) {
      throw new UserUsernameLengthExceeded(`The Username <${value}> has more than 30 characters`);
    }
  }
}
