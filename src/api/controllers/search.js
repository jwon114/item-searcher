const searchItemsQuery = require('../../../db/queries/searchItems')
const pool = require('../../../db/connection')

const search = (req, res) => {
  let status, response = {}
  const { searchTerm } = req.query
  if (searchTerm) {
    ;(async () => {
      const result = await pool.query(searchItemsQuery(searchTerm))
      status = 200
      response["status"] = status
      response["result"] = result.rows
      res.status(status).json(response)
    })().catch(error => console.log(error))
  } else {
    status = 400
    response["status"] = status
    response["error"] = 'Required query param searchTerm missing'
    res.status(status).json(response)
  }
}

module.exports = { search }