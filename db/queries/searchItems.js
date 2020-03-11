const searchItemsQuery = (searchTerm) => {
  return {
    text: `SELECT users.id as "user_id",
                  users.first_name,
                  users.city,
                  items.id as "item_id",
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