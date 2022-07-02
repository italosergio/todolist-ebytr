import * as express from 'express';
import { Tasks } from '../controller';

export default class TasksRouter {
  public route: express.Router;

  constructor() {
    this.route = express.Router();
    this.config();
  }

  private config(): void {
    this.route.get('/', Tasks.get);
  }
}
