import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { Uuid } from '../../../../../../src/Contexts/Shared/infrastructure/value-object/Uuid';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const id = new Uuid('4a2005ea-4d57-40b9-9a90-aad86f07bc27');
    const name = 'name';
    const duration = 'duration';
    const courseExpected = new Course({ id, name, duration });
    const repository = new FileCourseRepository();

    await repository.save(courseExpected);

    const course = await repository.search(id.toString());
    expect(course).toEqual(courseExpected);
  });
});
