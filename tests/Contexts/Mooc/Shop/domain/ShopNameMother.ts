import { ShopName } from '../../../../../src/Contexts/Mooc/Shops/domain/ShopName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class ShopNameMother {
  static create(value: string): ShopName {
    return new ShopName(value);
  }

  static random(): ShopName {
    return this.create(WordMother.random());
  }

  static invalidName(): string {
    return 'a'.repeat(21);
  }
}
