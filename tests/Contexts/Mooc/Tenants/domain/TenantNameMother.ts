import { TenantName } from '../../../../../src/Contexts/Mooc/Tenants/domain/TenantName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class TenantNameMother {
  static create(value: string): TenantName {
    return new TenantName(value);
  }

  static random(): TenantName {
    return this.create(WordMother.random());
  }

  static invalidName(): string {
    return 'a'.repeat(40);
  }
}
