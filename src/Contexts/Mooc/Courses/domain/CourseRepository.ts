import { Nullable } from '../../../Shared/domain/Nullable';
import { Course } from './Course';
import { CourseId } from './CourseId';

export interface CourseRepository {
  save(course: Course): Promise<void>;
  search(id: CourseId): Promise<Nullable<Course>>;
}
