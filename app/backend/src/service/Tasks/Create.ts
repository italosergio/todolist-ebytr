import { ITask } from '../../interface';
import { Tasks } from '../../model';

export default class Create {
  // eslint-disable-next-line class-methods-use-this
  public async Task(values: ITask): Promise<void> {
    const tasks = new Tasks();
    await tasks.create(values);
  }
}
