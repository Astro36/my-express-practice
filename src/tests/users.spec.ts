import request from 'supertest';
import app from '../app';

describe('route:users', (): void => {
  describe('GET /', (): void => {
    it('find the user', (done): void => {
      request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});
