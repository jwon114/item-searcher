const fs = require('fs');
const pool = require('./connection')
const copyFrom = require('pg-copy-streams').from;
const usersFile = './db/users.csv'
const itemsFile = './db/items.csv'

// Clear the table data and seed data from CSV
pool.connect((err, client, done) => {
  client.query('DELETE FROM users;')
        .then(res => {
          console.log('User table data deleted')
          const stream = client.query(copyFrom('COPY users FROM STDIN CSV HEADER;'))
          const fileStream = fs.createReadStream(usersFile)
          fileStream.on('error', err => { console.error(err); done() })
          stream.on('error', err => { console.error(err); done() })
          stream.on('end', () => { console.log('Users inserted'); done() })
          fileStream.pipe(stream)
        })
        .catch(err => { console.log(err); done })
})

pool.connect((err, client, done) => {
  client.query('DELETE FROM items;')
        .then(res => {
          console.log('Item table data deleted')
          const stream = client.query(copyFrom('COPY items FROM STDIN CSV HEADER;'))
          const fileStream = fs.createReadStream(itemsFile)
          fileStream.on('error', err => { console.error(err); done() })
          stream.on('error', err => { console.error(err); done() })
          stream.on('end', () => { console.log('Items inserted'); done() })
          fileStream.pipe(stream)
        })
        .catch(err => { console.log(err); done })
})