import { Nullable } from '../../../Shared/domain/Nullable';
import { Shop } from './Shop';
import { ShopId } from './ShopId';

export interface ShopRepository {
  save(course: Shop): Promise<void>;
  search(id: ShopId): Promise<Nullable<Shop>>;
}
