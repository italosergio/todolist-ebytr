import { ITask } from '../interface';
import tasksModel from '../database/models/Tasks';

export default class Tasks {
  private _tasks: ITask[];

  public async get() {
    this._tasks = await tasksModel.findAll() as unknown as ITask[];
    return this._tasks;
  }
}
