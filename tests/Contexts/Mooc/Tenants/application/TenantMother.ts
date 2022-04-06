import { Tenant } from '../../../../../src/Contexts/Mooc/Tenants/domain/Tenant';
import { TenantIdMother } from '../domain/TenantIdMother';
import { TenantNameMother } from '../domain/TenantNameMother';

export class TenantMother {
  static random() {
    return new Tenant({
      id: TenantIdMother.random(),
      name: TenantNameMother.random()
    });
  }
}
