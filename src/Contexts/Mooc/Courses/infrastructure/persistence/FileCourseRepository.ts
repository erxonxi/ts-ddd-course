import { deserialize, serialize } from 'bson';
import fs from 'fs';

import { CourseRepository } from '../../domain/CourseRepository';
import { Course } from '../../domain/Course';
import { Nullable } from '../../../../Shared/domain/Nullable';

export class FileCourseRepository implements CourseRepository {
  private FILE_PATH = `${__dirname}/courses`;

  async save(course: Course): Promise<void> {
    fs.promises.writeFile(this.filePath(course.id.value), serialize(course));
  }

  async search(courseId: any): Promise<Nullable<Course>> {
    const courseData = await fs.promises.readFile(this.filePath(courseId));
    const { id, name, duration } = deserialize(courseData);
    return new Course({ id, name, duration });
  }

  private filePath(courseId: string): string {
    return `${this.FILE_PATH}.${courseId}.repo`;
  }
}
