import { Nullable } from '../../../Shared/domain/Nullable';
import { TenantId } from '../../Tenants/domain/TenantId';
import { TenantShop } from './TenantShop';
import { TenantShopId } from './TenantShopId';

export interface TenantShopRepository {
  setTenantId(tenantId: TenantId): void;
  save(course: TenantShop): Promise<void>;
  search(id: TenantShopId): Promise<Nullable<TenantShop>>;
}
