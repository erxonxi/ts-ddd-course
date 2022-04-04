import { CourseCreatorParams } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';

export class CourseMother {
  static fromRequest(request: CourseCreatorParams) {
    return new Course({
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    });
  }
}
