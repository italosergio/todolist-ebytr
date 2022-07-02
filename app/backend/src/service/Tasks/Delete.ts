import { Tasks } from '../../model';

export default class Delete {
  // eslint-disable-next-line class-methods-use-this
  public async Task(id: number): Promise<void> {
    const tasks = new Tasks();
    await tasks.delete(id);
  }
}
