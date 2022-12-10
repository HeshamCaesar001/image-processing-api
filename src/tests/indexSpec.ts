import server from '../index';
import request from 'supertest';
const endpoint = 'http://localhost:3000/';

describe('check if server endpoint is reached ', () => {
  it('server must be reached and with 200 ok status', () => {
    request(server).get(endpoint).expect(200);
  });
});
