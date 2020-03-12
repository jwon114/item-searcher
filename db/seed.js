const fs = require('fs');
const pool = require('./connection')
const copyFrom = require('pg-copy-streams').from;
const usersFile = './db/data/users.csv'
const itemsFile = './db/data/items.csv'

const deleteTableData = async (table, client) => {
  await client.query(`DELETE FROM ${table}`)
  console.log(`${table} table data deleted`)
}

const insertFromCSV = (table, csv, client) => {
  const stream = client.query(copyFrom(`COPY ${table} FROM STDIN CSV HEADER;`))
  const fileStream = fs.createReadStream(csv)
  fileStream.on('error', err => { console.error(err) })
  stream.on('error', err => { console.error(err) })
  stream.on('end', () => { console.log(`${table} inserted`) })
  fileStream.pipe(stream)
}

// Clear the table data and insert seed data from CSV files
;(async () => {
  const client = await pool.connect()
  try {
    deleteTableData('users', client)
    deleteTableData('items', client)

    insertFromCSV('users', usersFile, client)
    insertFromCSV('items', itemsFile, client)
  } finally {
    client.release()
  }
})().catch(err => console.log(err))