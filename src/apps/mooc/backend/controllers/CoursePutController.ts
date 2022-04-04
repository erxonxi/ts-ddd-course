import { Request, Response } from 'express';
import { Controller } from './Controller';
import httpStatus from 'http-status';

import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';

export class CoursePutController implements Controller {
  constructor(private courseCreator: CourseCreator) {}

  async run(req: Request, res: Response) {
    const { id, name, duration } = req.body;

    this.courseCreator.run(id, name, duration);

    res.status(httpStatus.CREATED).send();
  }
}
