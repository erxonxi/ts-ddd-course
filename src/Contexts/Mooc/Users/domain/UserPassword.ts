import { StringValueObjectMutable } from '../../../Shared/domain/value-object/StringValueObjectMutable';

export class UserPassword extends StringValueObjectMutable {
  constructor(value: string) {
    super(value);
  }
}
