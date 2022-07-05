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
    await tasksModel.create(values);
  }

  // eslint-disable-next-line class-methods-use-this
  public async update(id: number, editedTask: object): Promise<void> {
    await tasksModel.update(
      { ...editedTask },
      { where: { id } },
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async deleteOne(id: number): Promise<void> {
    await tasksModel.destroy({ where: { id } });
  }

  public async deleteAll(): Promise<void> {
    await tasksModel.destroy({ where: {} });
  }
}
