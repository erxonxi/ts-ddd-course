import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseId } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseId';
import { CourseName } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const id = '4a2005ea-4d57-40b9-9a90-aad86f07bc27';
    const name = 'name';
    const duration = 'duration';

    const courseExpected = new Course({
      id: new CourseId(id),
      name: new CourseName(name),
      duration: new CourseDuration(duration)
    });
    const repository = new FileCourseRepository();

    await repository.save(courseExpected);

    const course = await repository.search(id.toString());
    expect(course).toEqual(courseExpected);
  });
});
