import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';
import { TenantShopRepository } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopRepository';
import { TenantShop } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShop';
import { TenantShopId } from '../../../../../src/Contexts/Mooc/TenantShops/domain/TenantShopId';
import { TenantId } from '../../../../../src/Contexts/Mooc/Tenants/domain/TenantId';

export class TenantShopRepositoryMock implements TenantShopRepository {
  private mockSave = jest.fn();
  private tenant_id = {};
  private db: any = {};

  setTenantId(tenantId: TenantId) {
    this.tenant_id = tenantId;
  }

  async save(tenantShop: TenantShop): Promise<void> {
    this.mockSave(tenantShop);
    if (!this.db['shop_' + this.tenant_id]) {
      this.db['shop_' + this.tenant_id] = [];
    }
    this.db['shop_' + this.tenant_id].push(tenantShop.toPrimitives());
  }

  async search(id: TenantShopId): Promise<Nullable<TenantShop>> {
    const db = this.db['shop_' + this.tenant_id];
    const shop = db.filter((shop: any) => shop.id === id.value);
    return TenantShop.fromPrimitives(shop);
  }

  assertLastSavedUserIs(expected: TenantShop): void {
    const db = this.db['shop_' + this.tenant_id];
    const shop = db[db.length - 1];
    const lastSavedShop = TenantShop.fromPrimitives(shop);
    expect(lastSavedShop).toBeInstanceOf(TenantShop);
    expect(lastSavedShop.id).toEqual(expected.id);
  }
}
