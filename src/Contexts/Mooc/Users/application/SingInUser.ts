import { UserRepository } from '../domain/UserRepository';
import { UserEmail } from '../domain/UserEmail';
import { HashEncrypt } from '../infrastructure/encrypt/HashEncrypt';
import { UserUnauthorizedError } from '../domain/UserUnauthorizedError';

export type SingInUserParams = {
  email: string;
  password: string;
};

export class SingInUser {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run({ email, password }: SingInUserParams): Promise<void> {
    const user = await this.repository.searchByEmail(new UserEmail(email));
    if (!user) {
      throw new UserUnauthorizedError('Invalid email or password');
    }

    const verified = await HashEncrypt.compare(password, user.password.value);
    if (!verified) {
      throw new UserUnauthorizedError('Invalid email or password');
    }
  }
}
