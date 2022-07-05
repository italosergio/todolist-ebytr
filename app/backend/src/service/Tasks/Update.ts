import { Tasks } from '../../model';

export default class Update {
  // eslint-disable-next-line class-methods-use-this
  public async Task(id: number, editedTask: object): Promise<void> {
    const tasks = new Tasks();
    await tasks.update(id, editedTask);
  }
}
