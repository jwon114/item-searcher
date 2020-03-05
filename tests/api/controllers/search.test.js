const request = require('supertest')
const app = require('../../../src/app')

describe("Search routing", () => {
  test('Should respond with 200 when provided with query params', () => {
    return request(app)
      .get('/search')
      .query({ searchTerm: 'camera'})
      .expect(200)
      .expect('Content-Type', /json/)
  })

  test('Should respond with 404 when no query params provided', () => {
    return request(app)
      .get('/search')
      .expect(400)
      .expect('Content-Type', /json/)
      .then(res => expect(res.body.error).toBe('Required query param missing'))
  })
})