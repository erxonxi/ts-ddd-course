import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { ShopNameLengthExceeded } from './ShopNameLengthExceeded';

export class ShopName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan20Characters(value);
  }

  private ensureLengthIsLessThan20Characters(value: string): void {
    if (value.length > 20) {
      throw new ShopNameLengthExceeded(`The Shop Name <${value}> has more than 30 characters`);
    }
  }
}
