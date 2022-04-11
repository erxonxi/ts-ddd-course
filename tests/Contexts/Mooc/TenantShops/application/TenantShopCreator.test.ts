import { TenantShopCreator } from '../../../../../src/Contexts/Mooc/TenantShops/application/TenantShopCreator';
import { TenantShopNameLengthExceeded } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopNameLengthExceeded';
import { UuidMother } from '../../../Shared/domain/UuidMother';
import { TenantShopRepositoryMock } from '../__mocks__/TenantShopRepositoryMock';
import { TenantShopMother } from './TenantShopMother';

let repository: TenantShopRepositoryMock;
let tenantShopCreator: TenantShopCreator;

beforeEach(() => {
  repository = new TenantShopRepositoryMock();
  tenantShopCreator = new TenantShopCreator(repository);
});

describe('TenantShopCreator', () => {
  it('create new shop for tenant', async () => {
    const shop = TenantShopMother.random();
    const tenant_id = UuidMother.random();
    await tenantShopCreator.run({ ...shop.toPrimitives(), tenant_id });
    repository.assertLastSavedUserIs(shop);
  });

  it('throw error at create new shop for tenant', async () => {
    expect(() => {
      const shop = TenantShopMother.randomInvalidTenantShopName();
      const tenant_id = UuidMother.random();
      tenantShopCreator.run({ ...shop.toPrimitives(), tenant_id });
      repository.assertLastSavedUserIs(shop);
    }).toThrow(TenantShopNameLengthExceeded);
  });
});
