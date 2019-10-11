import { Response, Request, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
  console.log('is validated user?');
  next();
};
