const request = require('supertest')
const app = require('../../../src/app')

describe("Search Controller", () => {
  test('Should respond with 200 when provided with query params and with 20 results', () => {
    return request(app)
      .get('/search')
      .query({ searchTerm: 'camera'})
      .expect(200)
      .then(res => {
        expect(res.body.result.length).toBe(20)
      })
  })

  test('Should respond with 400 when no query params provided', () => {
    return request(app)
      .get('/search')
      .expect(400)
      .then(res => {
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toBe('Required query param searchTerm missing')
      })
  })
})
