const { expect } = require('chai');

const app = require('supertest')(require('../app'));

describe('Routes', () => {
  describe('GET /', () => {
    it('show information about the api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme API');
    });
  });
});
