import { NextFunction, Response, Request } from 'express';
import { Find, Create, Update, Delete } from '../service/Tasks';
import { ITask } from '../interface';

export default class Tasks {
  private _tasks: ITask[];

  public async get(_req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const findAll = new Find();

    this._tasks = await findAll.Tasks();

    if (!this._tasks.length) return res.status(400).json({ message: 'Tasks doesn\'t exist' });

    return res.status(200).json(this._tasks);
  }

  public async insert(req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const { task } = req.body;

    const insert = new Create();
    await insert.Task(task);

    const findAll = new Find();
    this._tasks = await findAll.Tasks();

    return res.status(201).json(this._tasks);
  }

  public async update(req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const { id, editedTask } = req.body;

    const update = new Update();
    await update.Task(id, editedTask);

    const findAll = new Find();
    this._tasks = await findAll.Tasks();

    return res.status(200).json(this._tasks);
  }

  public async delete(req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const { id } = req.body;

    const destroy = new Delete();
    await destroy.Task(id);

    const findAll = new Find();
    this._tasks = await findAll.Tasks();

    return res.status(200).json(this._tasks);
  }
}
