import { UserRepository } from '../domain/UserRepository';
import { UserEmail } from '../domain/UserEmail';
import { UserPassword } from '../domain/UserPassword';
import { UserUsername } from '../domain/UserUsername';
import { UserId } from '../domain/UserId';
import { User } from '../domain/User';

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
    const user = new User({
      id: new UserId(id),
      username: new UserUsername(username),
      email: new UserEmail(email),
      password: new UserPassword(password)
    });
    return this.repository.save(user);
  }
}
