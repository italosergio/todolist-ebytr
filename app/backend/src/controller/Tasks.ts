import { NextFunction, Response, Request } from 'express';
import { Find } from '../service';
import { ITask } from '../interface';

export default class Tasks {
  private _tasks: ITask[];

  public async get(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const service = new Find();

    this._tasks = await service.Tasks();

    if (!this._tasks.length) return res.status(400).json({ message: 'Tasks doesn\'t exist' });

    return res.status(200).json(this._tasks);
  }
}
