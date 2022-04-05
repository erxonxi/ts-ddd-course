import { SingInUserParams } from '../../../../../src/Contexts/Mooc/Users/application/SingInUser';
import { UserEmail } from '../../../../../src/Contexts/Mooc/Users/domain/UserEmail';
import { UserPassword } from '../../../../../src/Contexts/Mooc/Users/domain/UserPassword';
import { UserEmailMother } from '../domain/UserEmailMother';
import { UserPasswordMother } from '../domain/UserPasswordMother';

export class SingInUserRequestMother {
  static create(email: UserEmail, password: UserPassword) {
    return { email: email.value, password: password.value };
  }

  static random(): SingInUserParams {
    return this.create(UserEmailMother.random(), UserPasswordMother.random());
  }

  static invalidRequest(): SingInUserParams {
    return {
      email: UserEmailMother.random().value,
      password: UserPasswordMother.random().value
    };
  }
}
