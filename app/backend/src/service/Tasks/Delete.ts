/* eslint-disable class-methods-use-this */
import { Tasks } from '../../model';

export default class Delete {
  public async Task(id: number): Promise<void> {
    const tasks = new Tasks();
    await tasks.deleteOne(id);
  }

  public async Tasks(): Promise<void> {
    const tasks = new Tasks();
    await tasks.deleteAll();
  }
}
