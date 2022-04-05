import { UserUsername } from '../../../../../src/Contexts/Mooc/Users/domain/UserUsername';
import { WordMother } from '../../../Shared/domain/WordMother';

export class UserUsernameMother {
  static create(value: string): UserUsername {
    return new UserUsername(value);
  }

  static random(): UserUsername {
    return this.create(WordMother.random());
  }

  static invalidName(): string {
    return 'a'.repeat(40);
  }
}
