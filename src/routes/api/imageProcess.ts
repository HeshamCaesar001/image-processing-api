import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import validate from '../../ImageProcessingFunctions/middleware/validate';
import functions from '../../ImageProcessingFunctions/imageProcessing/functions';

const imagesRouter = express.Router();
imagesRouter.get('/', (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve('./' + 'index.html'));
});

// processing image endpoint
imagesRouter.get('/sizingImage', validate, (req: Request, res: Response) => {
  // get the query values from the request
  const filename = req.query.imageFile as string;
  const fileExt = filename.split('.');
  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;
  const thumbNail = path.resolve('./' + 'thumbnail');
  const pic = thumbNail + `/${fileExt[0]}_${width}_${height}.${fileExt[1]}`;

  // main logic to decide how to deal with this image
  if (functions.IfImageExistsInMainFolder(filename)) {
    if (fs.existsSync(thumbNail)) {
      if (functions.IfImageAlreadyCreated(pic)) {
        // show that sized image
        res.sendFile(pic);
      } else {
        res.sendFile(
          functions.sizing(filename, width, height, fileExt, thumbNail)
        );
      }
    } else {
      fs.mkdirSync(thumbNail);
      res.sendFile(
        functions.sizing(filename, width, height, fileExt, thumbNail)
      );
    }
  } else {
    res
      .status(400)
      .send(
        'please choose pic from the image directory or put ur desired pic in this folder'
      );
  }
});

export default imagesRouter;
