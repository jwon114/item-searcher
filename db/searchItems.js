const pool = require('./connection')

//select users.first_name, users.city, items.item_name, items.daily_price_pence, items.img_url from items inner join users on users.id = items.user_id where lower(items.item_name) ilike '%camera%';

const searchItems = (searchTerm) => {
  const query = {
    text: `SELECT 
            users.id,
            users.first_name, 
            users.city, 
            items.item_name,
            items.daily_price_pence,
            items.img_url
          FROM items
          INNER JOINS users on users.id = items.user_id
          WHERE items.item_name ILIKE '%$1%';`,
    values: [searchTerm]
  }
  
  pool.query(query, (err, res) => {
    
  })
}

module.exports = searchItems