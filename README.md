# Introduction
This is an application that serves a API endpoint that will return the most appropriate 20 items from a CSV file dataset. The `Get /search` endpoint will be given a `searchTerm`, e.g. `/search?searchTerm=camera`. The items returned must contain the owner's information so it can be correctly displayed to a frontend.

# Approach
My approach to building a simple and concise node application that serves data through a search endpoint.

The first challenge was tackling data reading and storage. To find out how the database tables were structured, a look into the CSV data files provided all the information needed. I wanted to store the data for fast and easy read access, so I chose a familiar DBMS in **Postgresql**. Tables were created with a SQL script while connected to the database. The packages **pg** to interface with Postgresql and **pg-copy-streams** to read from CSV and write to the database.

The decision to use plain SQL instead of an ORM because of it's simplicity and the using the appropriate tools for the task at hand. The item search query joins the User and Items tables based on the User ID, and searches the item name with a case insensitive regular expression. The expression uses word boundaries so only if the exact word is found. For example, *camera* vs. *cameraplus*. Only items with name *camera* but not *cameraplus*.

Once the data was inserted into the database, the **Express** web framework was used to create the skeleton of the application. A single controller to handle the search request and query the database with the search keyword query parameter. Testing this controller's endpoint with the **Jest** testing framework and **Supertest** for HTTP assertions.

## Points of failure
- The search uses regular expression matching of string and does not have the ability to identify branding or associated items. For example, searching for *camera* will not return branded items such as *Canon* or *Nikon*.
- The order of the results is not guaranteed.
- Query parameters only handles a single key in *searchTerm* and a single value. Anything other than this will fail to return a result.

## Performance
- Use of *pg* pooling for frequent queries to the database.
- Have not tested API under load.

# Setup
- Clone or download the repository
## Database
- Install Postgresql if you haven't already. https://www.postgresql.org/download/
- Create a database in Postgresql, the database name will be used later in the environment file.
```
CREATE DATABASE [DBNAME];
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
- Run the create tables SQL script in the db/sql folder of the project. For *psql* terminal, within the project folder connect to the database and execute the script using the include command.
```
psql
\c [DBNAME]
\i db/sql/create_tables.sql
```
## Application
- Install project dependencies
```
npm install
```
- Execute the seed script to insert data from the CSV data files.
```
npm run seed
```
- Start the node server
```
npm run start
```
- Browse to localhost:3000/search?searchTerm=*search* and replace *search* with a search term. Only 20 search results will be returned.

# Testing
- Execute the tests
```
npm run test
```
# Technologies
- Node, Express
- Postgresql
- Jest, Supertest