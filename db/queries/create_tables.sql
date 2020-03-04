CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY, 
  first_name VARCHAR(100) NOT NULL, 
  city VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY,
  item_name VARCHAR(100) NOT NULL,
  daily_price_pence NUMERIC(2) NOT NULL,
  img_url VARCHAR(100),
  user_id INTEGER NOT NULL
)