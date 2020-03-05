const search = (req, res) => {
  let status, response = {}
  if (req.query.searchTerm) {
    status = 200
    response["result"] = search(req.query.searchTerm)
  } else {
    status = 400
    response["error"] = 'Required query param missing'
  }

  response["status"] = status
  res.status(status)
  res.send(response)
}

module.exports = { search }