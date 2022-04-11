import { TenantShopName } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class TenantShopNameMother {
  static create(value: string): TenantShopName {
    return new TenantShopName(value);
  }

  static random(): TenantShopName {
    return this.create(WordMother.random());
  }

  static invalidName(): string {
    return 'a'.repeat(21);
  }
}
