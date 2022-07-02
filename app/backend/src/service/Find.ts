import { ITask } from '../interface';
import { Tasks } from '../model';

export default class Find {
  static _tasks: ITask[];

  static async Tasks() {
    this._tasks = await Tasks.get();
    return this._tasks;
  }
}
