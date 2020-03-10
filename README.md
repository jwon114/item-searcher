# Introduction
This is an application that serves a API endpoint that will return the most appropriate 20 items from a CSV file dataset. The `Get /search` endpoint will be given a `searchTerm`, e.g. `/search?searchTerm=camera`. The items returned must contain the owner's information so it can be correctly displayed to a frontend.

# Approach
Write brief summary on the approach you took and the tools you used (max 500 words)
My aim was to build a simple and concise node application without the extra unnecessary tools and libraries.

The first challenge was tackling data read and storage. The CSV files not only provided the data, but an insight into the table structure required. I wanted to store the data for fast and easy read access, so I chose a familiar DBMS in Postgresql. An SQL script to create the tables and the package pg to interface with Postgresql. The pg-copy-streams package was then used to read/write from CSV into the database.

I decided to use plain SQL instead of an ORM because I felt it wasn't required for the task at hand. The query joins the User and Items tables based on the User ID, and searches the item name with a case insensitive regular expression. The expression uses word boundaries so only if the exact word is found, for example, camera vs. cameraplus, items with camera but not cameraplus.

Once the data was in the database, I used the Express web framework to create the skeleton of the application. A single controller to handle the search endpoint request and query the database with the search keyword query parameter. I tested this controller's endpoint using the Jest testing framework and Supertest for HTTP assertions.

# Setup
- Clone or download the repository
## Database
- Install Postgresql if you don't have it. https://www.postgresql.org/download/
- Create a database in Postgresql, the database name will be used in the environment file.
```
CREATE DATABASE [DBNAME]
```
- Create .env file in root directory with the following database connection variables including the newly created database name. PGHOST defaults to 'localhost', PGPORT defaults to 5432. Reference: https://www.postgresql.org/docs/9.3/libpq-envars.html
```
PGHOST='localhost'
PGUSER=[USERNAME]
PGDATABASE=[DBNAME]
PGPASSWORD=[PASSWORD]
PGPORT=[PORT]
```

An example .env I created:
```
PGHOST='localhost'
PGUSER='James'
PGDATABASE='item_searcher'
PGPASSWORD=null
PGPORT=5432
```
## Application
- Install the project dependencies
```
npm install
```
- Execute the seed script to insert data from the CSV data files.
```
npm run seed
```
- 

# Testing
- Execute the tests. Only created a test for the search controller
```
npm run test
```
# Technologies
- Node, Express
- Postgresql
- Jest, Supertest