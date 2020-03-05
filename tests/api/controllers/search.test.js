const request = require('supertest')
const app = require('../../../src/app')

describe("Search Controller", () => {
  test('Should respond with 200 when provided with query params', () => {
    return request(app)
      .get('/search')
      .query({ searchTerm: 'camera'})
      .expect(200)
  })

  test('Should respond with 400 when no query params provided', () => {
    return request(app)
      .get('/search')
      .expect(400)
      .then(res => {
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toBe('Required query param missing')
      })
  })
})