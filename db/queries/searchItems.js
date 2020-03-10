const searchItemsQuery = (searchTerm) => {
  return {
    text: `SELECT users.id, 
                  users.first_name, 
                  users.city, 
                  items.item_name, 
                  items.daily_price_pence, 
                  items.img_url 
          FROM items 
          INNER JOIN users on users.id = items.user_id 
          WHERE items.item_name ~* $1 LIMIT 20;`,
    values: [`\\y${searchTerm}\\y`]
  }
}

module.exports = searchItemsQuery