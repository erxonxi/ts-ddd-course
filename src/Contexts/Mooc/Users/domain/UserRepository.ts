import { Nullable } from '../../../Shared/domain/Nullable';
import { UserEmail } from './UserEmail';
import { UserId } from './UserId';
import { User } from './User';

export interface UserRepository {
  save(course: User): Promise<void>;
  searchByEmail(email: UserEmail): Promise<Nullable<User>>;
  search(id: UserId): Promise<Nullable<User>>;
}
