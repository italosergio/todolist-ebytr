import { NextFunction, Response, Request } from 'express';
import { Find } from '../service';
import { ITask } from '../interface';

export default class Tasks {
  static async get(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const tasks: ITask[] = await Find.Tasks();
    if (!tasks) return res.status(400).json({ message: 'Tasks doesn\'t exist' });
    return res.status(200).json(tasks);
  }
}
