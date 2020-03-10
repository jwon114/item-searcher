## Introduction
This is an application that serves a API endpoint that will return the most appropriate 20 items from a CSV file dataset. The `Get /search` endpoint will be given a `searchTerm`, e.g. `/search?searchTerm=camera`. The items returned must contain the owner's information so it can be correctly displayed to a frontend.

## Approach
Write brief summary on the approach you took and the tools you used (max 500 words)
My aim was to build a simple and concise node application without the extra unnecessary tools and libraries.

The first challenge was tackling data read and storage. The CSV files not only provided the data, but an insight into the table structure required. I wanted to store the data for fast and easy read access, so I chose a familiar DBMS in Postgresql. An SQL script to create the tables and the package pg to interface with Postgresql. The pg-copy-streams package was then used to read/write from CSV into the database.

I decided to use plain SQL instead of an ORM because I felt it wasn't required for the task at hand. The query joins the User and Items tables based on the User ID, and searches the item name with a case insensitive regular expression. The expression uses word boundaries so only if the exact word is found, for example, camera vs. cameraplus.

Once the data was in the database, I used the Express web framework to create the skeleton of the application. A single controller to handle the search endpoint request and query the database with the search keyword query parameter. I tested this controller's endpoint using the Jest testing framework and Supertest.

## Setup
- Clone or download the repository
- Install Postgresql if you haven't already. https://www.postgresql.org/download/
- Install the project dependencies
```
npm install
```
- 
- Run psql and create database in Postgres with CREATE DATABASE [DBNAME]
- Create .env file with database connection credentials
- Run seed file to import data from CSV files

## Testing
- Jest, Supertest for endpoint testing and HTTP assertions 

## Technologies
- Node, Express
- Postgresql
- Jest, Supertest