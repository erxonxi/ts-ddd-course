import container from '../../../../../../src/apps/mooc/backend/dependency-injection';
import { UserRepository } from '../../../../../../src/Contexts/Mooc/Users/domain/UserRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { UserMother } from '../../../Users/application/UserMother';

const repository: UserRepository = container.get('Mooc.Users.domain.UserRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Mooc.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('UserRepository', () => {
  describe('#save', () => {
    it('should save a User', async () => {
      const user = UserMother.random();

      await repository.save(user);
    });
  });

  describe('#search', () => {
    it('should return an existing User', async () => {
      const expectedUser = UserMother.random();
      await repository.save(expectedUser);

      const User = await repository.search(expectedUser.id);

      expect(expectedUser).toEqual(User);
    });

    it('should not return a non existing User', async () => {
      expect(await repository.search(UserMother.random().id)).toBeFalsy();
    });
  });
});
