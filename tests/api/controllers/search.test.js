const request = require('supertest')
const app = require('../../../src/app')

describe("Search Controller", () => {
  test('Should respond with 200 and 20 results when provided with query params', () => {
    const expectedItemObject = {
      user_id: expect.any(Number),
      first_name: expect.any(String),
      item_id: expect.any(Number),
      item_name: expect.any(String),
      daily_price_pence: expect.any(Number),
      img_url: expect.any(String)
    }
    
    return request(app)
      .get('/search')
      .query({ searchTerm: 'camera'})
      .expect(200)
      .then(res => {
        expect(res.body.result.length).toBe(20)
        expect(res.body.result[0]).toMatchObject(expectedItemObject)
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
