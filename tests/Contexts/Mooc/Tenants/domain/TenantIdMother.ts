import { TenantId } from '../../../../../src/Contexts/Mooc/Tenants/domain/TenantId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class TenantIdMother {
  static create(value: string): TenantId {
    return new TenantId(value);
  }

  static creator() {
    return () => TenantIdMother.random();
  }

  static random(): TenantId {
    return this.create(UuidMother.random());
  }
}
