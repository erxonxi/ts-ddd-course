import { Nullable } from '../../../Shared/domain/Nullable';
import { Tenant } from './Tenant';
import { TenantId } from './TenantId';

export interface TenantRepository {
  save(Tenant: Tenant): Promise<void>;
  search(id: TenantId): Promise<Nullable<Tenant>>;
}
