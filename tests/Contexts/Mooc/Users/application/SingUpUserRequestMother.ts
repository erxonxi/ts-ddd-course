import { SingUpUserParams } from '../../../../../src/Contexts/Mooc/Users/application/SingUpUser';
import { UserUsername } from '../../../../../src/Contexts/Mooc/Users/domain/UserUsername';
import { UserEmail } from '../../../../../src/Contexts/Mooc/Users/domain/UserEmail';
import { UserPassword } from '../../../../../src/Contexts/Mooc/Users/domain/UserPassword';
import { UserUsernameMother } from '../domain/UserUsernameMother';
import { UserEmailMother } from '../domain/UserEmailMother';
import { UserPasswordMother } from '../domain/UserPasswordMother';
import { UserId } from '../../../../../src/Contexts/Mooc/Users/domain/UserId';
import { UserIdMother } from '../domain/UserIdMother';

export class SingUpUserRequestMother {
  static create(id: UserId, username: UserUsername, email: UserEmail, password: UserPassword) {
    return { id: id.value, username: username.value, email: email.value, password: password.value };
  }

  static random(): SingUpUserParams {
    return this.create(
      UserIdMother.random(),
      UserUsernameMother.random(),
      UserEmailMother.random(),
      UserPasswordMother.random()
    );
  }

  static invalidRequest(): SingUpUserParams {
    return {
      id: UserIdMother.random().value,
      username: UserUsernameMother.invalidName(),
      email: UserEmailMother.random().value,
      password: UserPasswordMother.random().value
    };
  }
}
