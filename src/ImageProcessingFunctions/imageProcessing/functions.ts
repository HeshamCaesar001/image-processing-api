import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';
const IfImageExistsInMainFolder = (filename: string): boolean => {
  if (fs.existsSync(path.resolve('./' + `/images/${filename}`))) {
    return true;
  } else {
    return false;
  }
};

const IfImageAlreadyCreated = (pic: string): boolean => {
  if (fs.existsSync(pic)) {
    return true;
  } else {
    return false;
  }
};

const sizing = (
  filename: string,
  width: string,
  height: string,
  fileExt: string[],
  thumbNail: string
): string => {
  sharp(path.resolve('./' + `/images/${filename}`))
    .resize(parseInt(width), parseInt(height))
    .toFile(thumbNail + `/${fileExt[0]}_${width}_${height}.${fileExt[1]}`);
  const dir = path.resolve('./' + 'sized.html') as string;
  return dir;
};
export default { IfImageExistsInMainFolder, IfImageAlreadyCreated, sizing };
