const searchItems = require('../../../db/searchItems')

const search = (req, res) => {
  let status, response = {}
  if (!req.query.searchTerm) {
    status = 400
    response["status"] = status
    response["error"] = 'Required query param missing'
    res.status(status)
    res.send(response)
  }

  searchItems(req.query.searchTerm)
    .then(result => {
      status = 200
      response["status"] = status
      response["result"] = result.rows
      res.status(status)
      res.send(response)
    })
    .catch(e => console.error(e))
}

module.exports = { search }