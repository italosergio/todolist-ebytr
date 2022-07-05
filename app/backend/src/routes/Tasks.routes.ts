import * as express from 'express';
import { Tasks } from '../controller';

export default class TasksRouter {
  public route: express.Router;

  constructor() {
    this.route = express.Router();
    this.config();
  }

  private config(): void {
    const tasks = new Tasks();
    this.route.get('/', tasks.get);
    this.route.post('/', tasks.insert);
    this.route.patch('/', tasks.update);
    this.route.delete('/', tasks.deleteAll);
    this.route.delete('/:id', tasks.deleteOne);
  }
}
