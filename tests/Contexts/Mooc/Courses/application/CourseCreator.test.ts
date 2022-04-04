import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseNameLengthExceeded';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseMother } from './CourseMother';
import { CreateCourseRequestMother } from './CreateCourseRequestMother';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const request = CreateCourseRequestMother.random();

    const course = CourseMother.fromRequest(request);

    await creator.run(request);
    repository.assertLastSavedCourseIs(course);
  });

  it('throw error a invalid course', async () => {
    expect(() => {
      const request = CreateCourseRequestMother.invalidRequest();

      const course = CourseMother.fromRequest(request);

      repository.assertLastSavedCourseIs(course);
    }).toThrow(CourseNameLengthExceeded);
  });
});
