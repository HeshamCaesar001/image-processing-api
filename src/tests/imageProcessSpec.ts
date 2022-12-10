import imagesRouter from '../routes/api/imageProcess';
import request from 'supertest';
const endpoint = 'http://localhost:3000/';

//check if the home page returned with ok
describe('check if endpoint reached ', () => {
  it('image processing endpoint api reached with 200 ok status', () => {
    request(imagesRouter).get(endpoint).expect(200);
  });
});
