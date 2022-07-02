import { ITask } from '../interface';
import tasksModel from '../database/models/Tasks';

export default class Tasks {
  private _tasks: ITask[];

  public async get(): Promise<ITask[]> {
    this._tasks = await tasksModel.findAll() as unknown as ITask[];
    return this._tasks;
  }

  // eslint-disable-next-line class-methods-use-this
  public async create(values: ITask): Promise<void> {
    console.log(values);
    await tasksModel.create(values);
  }
}
