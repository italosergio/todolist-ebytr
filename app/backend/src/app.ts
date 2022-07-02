import * as express from 'express';
import { HttpError } from './middleware';
import { TasksRouter } from './routes';

import 'express-async-errors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.config();

    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    const { app } = this;

    app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`escutando na porta ${PORT}`));
  }

  private routes(): void {
    const tasks = new TasksRouter();
    this.app.use('/tasks', tasks.route);
    this.app.use(HttpError.throw);
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
