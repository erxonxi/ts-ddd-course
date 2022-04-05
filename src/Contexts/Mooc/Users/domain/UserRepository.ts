import { Nullable } from '../../../Shared/domain/Nullable';
import { User } from './User';
import { UserId } from './UserId';

export interface UserRepository {
  save(course: User): Promise<void>;
  search(id: UserId): Promise<Nullable<User>>;
}
