import { UserId } from '../domain/UserId';
import { UserRepository } from '../domain/UserRepository';
import { UserUnauthorizedError } from '../domain/UserUnauthorizedError';

export type MeUserParams = {
  id: string;
};

export type MeUserResponse = {
  username: string;
  email: string;
};

export class MeUser {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run({ id }: MeUserParams): Promise<MeUserResponse> {
    const user = await this.repository.search(new UserId(id));
    console.log(user);

    if (!user) {
      throw new UserUnauthorizedError('Unauthorized');
    }

    return {
      username: user.username.value,
      email: user.email.value
    };
  }
}
