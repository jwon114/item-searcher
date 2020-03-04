const db = require('./connection')

db.query('SELECT * from users;', (err, res) => {
  console.log(err, res)
})

// const createUserTable = () => {
//   const query = 'CREATE TABLE IF NOT EXISTS users (id integer PRIMARY KEY, first_name VARCHAR(100) NOT NULL, city VARCHAR(100) NOT NULL);'
//   pool.query(query)
//         .then((res) => {
//           console.log(res)
//           pool.end()
//         })
//         .catch((err) => {
//           console.log(err)
//           pool.end()
//         })
// }

// const create = async () => {
//   console.log('create tables')
//   try {
//     await createUserTable()
//     console.log('User table created')
//   } catch(e) {
//     console.error(e)
//   } finally {
//     client.end()
//   }
// }