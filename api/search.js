// GET /search?searchTerm=camera
const search = (req, res) => {
  if (!req.query.searchTerm) {
    res.status(400).send('Required query param missing')
  }

  res.send('OK')
}

module.exports = { search }