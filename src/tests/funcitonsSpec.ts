import functions from '../ImageProcessingFunctions/imageProcessing/functions';
import path from 'path';
import fs from 'fs-extra';

describe('check if uploaded image from the image folder', () => {
  it('should return false if the image not from image folder', () => {
    expect(functions.IfImageExistsInMainFolder('Pictures/Hisham.jpg')).toBe(
      false
    );
  });
  it('should return true if the uploaded image from the image directory', () => {
    expect(functions.IfImageExistsInMainFolder('fjord.jpg')).toBe(true);
  });
});

describe('check if uploaded image already exits with this size', () => {
  it('should return true if the image already exits with this size', () => {
    expect(
      functions.IfImageAlreadyCreated(
        path.resolve('./' + 'thumbnail/fjord_80_80.jpg')
      )
    ).toBe(true);
  });
  it('should return false if the image is with new size', () => {
    expect(
      functions.IfImageAlreadyCreated(
        path.resolve('./' + 'thumbnail/fjord_35_21.jpg')
      )
    ).toBe(false);
  });
});

describe('test the resizing function', () => {
  it('should generate the resized image', async () => {
    const filename = 'palmtunnel.jpg';
    const fileExt = filename.split('.');
    const width = '30';
    const height = '78';
    const thumbNail = path.resolve('./' + 'thumbnail');
    const result = `${fileExt[0]}_${width}_${height}.${fileExt[1]}`;

    /// check if the image exists just delete it so the test always generate new image resized

    if (fs.existsSync(path.resolve('./' + `thumbnail/${result}`))) {
      fs.unlinkSync(path.resolve('./' + `thumbnail/${result}`));
    }

    await functions.sizing(filename, width, height, fileExt, thumbNail);

    setTimeout(() => {
      expect(fs.existsSync(path.resolve('./' + `thumbnail/${result}`))).toBe(
        true
      );
    }, 5000);
  });
});
