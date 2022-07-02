import { ITask } from '../interface';
import { Tasks } from '../model';

export default class Find {
  private _tasks: ITask[];

  public async Tasks() {
    const getTasks = new Tasks();
    this._tasks = await getTasks.get();
    return this._tasks;
  }
}
