import { NextFunction } from 'express';
import path from 'path';
import { Request, Response } from 'express';

const validate = (req: Request, res: Response, next: NextFunction): void => {
  // the file must be with .jpg extension only

  const file = req.query.imageFile as string;
  if (path.extname(file) == '.jpg') {
    next();
  } else {
    res
      .status(400)
      .send('please choose images files only and with jpg extension');
  }
};

export default validate;
