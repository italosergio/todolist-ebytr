import { Response, Request, NextFunction } from 'express';
import { Error } from 'sequelize/types';

export default class HttpError {
  // eslint-disable-next-line class-methods-use-this
  public get(err: Error, _req: Request, res: Response, _next: NextFunction): Response {
    return res.status(500).json({
      message: 'Something whrong',
      error: err.message,
    });
  }
}
