import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { TenantShopNameLengthExceeded } from './TenantShopNameLengthExceeded';

export class TenantShopName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan20Characters(value);
  }

  private ensureLengthIsLessThan20Characters(value: string): void {
    if (value.length > 20) {
      throw new TenantShopNameLengthExceeded(`The TenantShop Name <${value}> has more than 30 characters`);
    }
  }
}
