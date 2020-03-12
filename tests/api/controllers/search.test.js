const request = require('supertest')
const app = require('../../../src/app')

describe("Search Controller", () => {
  test('Should respond with 200 and 20 results when provided with query params', async () => {
    const expectedItemObject = {
      user_id: expect.any(Number),
      first_name: expect.any(String),
      item_id: expect.any(Number),
      item_name: expect.any(String),
      daily_price_pence: expect.any(Number),
      img_url: expect.any(String)
    }
    
    const searchResult = await request(app)
      .get('/search')
      .query({ searchTerm: 'camera' })
    
    expect(searchResult.statusCode).toBe(200)
    expect(searchResult.body.result.length).toBe(20)
    expect(searchResult.body.result[0]).toMatchObject(expectedItemObject)
  })

  test('Should respond with 400 when no query params provided', async () => {
    const searchResult = await request(app)
      .get('/search')
    
    expect(searchResult.statusCode).toBe(400)
    expect(searchResult.body).toHaveProperty('error')
    expect(searchResult.body.error).toBe('Required query param searchTerm missing')
  })
})
