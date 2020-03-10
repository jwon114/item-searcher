const searchItemsQuery = require('../../../db/queries/searchItems')
const pool = require('../../../db/connection')

const search = (req, res) => {
  let status, response = {}
  const { searchTerm } = req.query
  if (!searchTerm) {
    status = 400
    response["status"] = status
    response["error"] = 'Required query param searchTerm missing'
    res.status(status)
    res.json(response)
  } else {
    pool.query(searchItemsQuery(searchTerm))
      .then(result => {
        status = 200
        response["status"] = status
        response["result"] = result.rows
        res.status(status)
        res.json(response)
      })
      .catch(e => console.error(e))
  }
}

module.exports = { search }