import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const id = '4a2005ea-4d57-40b9-9a90-aad86f07bc27';
    const name = 'some-name';
    const duration = 'some-duration';

    const course = new Course({
      id: new CourseId(id),
      name: new CourseName(name),
      duration: new CourseDuration(duration)
    });

    await creator.run({ id, name, duration });
    repository.assertLastSavedCourseIs(course);
  });
});
