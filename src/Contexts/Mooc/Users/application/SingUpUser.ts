import { UserRepository } from '../domain/UserRepository';
import { UserEmail } from '../domain/UserEmail';
import { UserPassword } from '../domain/UserPassword';
import { UserUsername } from '../domain/UserUsername';
import { UserId } from '../domain/UserId';
import { User } from '../domain/User';
import { HashEncrypt } from '../infrastructure/encrypt/HashEncrypt';
import { UserUnauthorizedError } from '../domain/UserUnauthorizedError';

export type SingUpUserParams = {
  id: string;
  username: string;
  password: string;
  email: string;
};

export class SingUpUser {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run({ id, username, password, email }: SingUpUserParams): Promise<void> {
    const userExists = await this.repository.searchByEmail(new UserEmail(email));
    if (userExists) {
      throw new UserUnauthorizedError('User email is already in use');
    }

    const passwordHash = await HashEncrypt.hash(password);
    const user = new User({
      id: new UserId(id),
      username: new UserUsername(username),
      email: new UserEmail(email),
      password: new UserPassword(passwordHash)
    });
    return this.repository.save(user);
  }
}
