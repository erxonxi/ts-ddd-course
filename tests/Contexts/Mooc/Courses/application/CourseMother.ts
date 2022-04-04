import { CourseCreatorParams } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';

export class CourseMother {
  static fromRequest(request: CourseCreatorParams) {
    return {
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    };
  }
}
