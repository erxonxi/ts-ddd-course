import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { User } from '../../domain/User';
import { UserEmail } from '../../domain/UserEmail';
import { UserId } from '../../domain/UserId';
import { UserRepository } from '../../domain/UserRepository';

export interface UserDocument {
  _id: string;
  username: string;
  email: string;
  password: string;
}

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  public save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }

  public async searchByEmail(email: UserEmail): Promise<Nullable<User>> {
    const collection = await this.collection();

    const document = await collection.findOne<UserDocument>({ email: email.value });

    return document ? User.fromPrimitives({ ...document, id: document._id }) : null;
  }

  public async search(id: UserId): Promise<Nullable<User>> {
    const collection = await this.collection();

    const document = await collection.findOne<UserDocument>({ _id: id.value });

    return document ? User.fromPrimitives({ ...document, id: id.value }) : null;
  }

  protected moduleName(): string {
    return 'users';
  }
}
