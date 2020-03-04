const fs = require('fs');
const db = require('./connection')
const copyFrom = require('pg-copy-streams').from;
const usersFile = './db/users.csv'
const itemsFile = './db/items.csv'

// Clear the table data and seed data from CSV
db.connect((err, client, done) => {
  client.query('DELETE FROM users;')
        .then(res => {
          console.log('Users data deleted')
          const stream = client.query(copyFrom('COPY users FROM STDIN CSV HEADER;'))
          const fileStream = fs.createReadStream(usersFile)
          fileStream.on('error', done)
          stream.on('error', done)
          stream.on('end', done)
          fileStream.pipe(stream)
          console.log('Users table seeded')
        })
        .catch(err => console.log(err))
})

db.connect((err, client, done) => {
  client.query('DELETE FROM items;')
        .then(res => {
          console.log('Items data deleted')
          const stream = client.query(copyFrom('COPY items FROM STDIN CSV HEADER;'))
          const fileStream = fs.createReadStream(itemsFile)
          fileStream.on('error', done)
          stream.on('error', done)
          stream.on('end', done)
          fileStream.pipe(stream)
          console.log('Items table seeded')
        })
        .catch(err => console.log(err))
})