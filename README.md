## Introduction
This is an application that serves a API endpoint that will return the most appropriate 20 items from a CSV file dataset. The `Get /search` endpoint will be given a `searchTerm`, e.g. `/search?searchTerm=camera`. The items returned must contain the owner's information so it can be correctly displayed to a frontend.

## Approach
Write brief summary on the approach you took and the tools you used (max 500 words)
My aim was to build a simple and concise node application without the extra unnecessary tools and libraries.

The first challenge was tackling data read and storage. The CSV files not only provided the data, but an insight into the table structure required. I knew I wanted to store the data for fast and easy read access, so I chose a familiar DBMS in Postgresql. I wrote an SQL script to create the tables and utilised the pg package to interface with Postgresql. The pg-copy-streams package was then used to read/write from CSV into the database.

Once the data was in the database, I used the Express web framework to create the skeleton of the application. A single controller to handle the search endpoint request.

## Setup
- npm install node modules
- Run psql and create database in Postgres with CREATE DATABASE [DBNAME]
- Create .env file with database connection credentials
- Run seed file to import data from CSV files

## Testing
- Jest, Supertest for endpoint testing and HTTP assertions 

## Technologies
- Node, Express
- Postgresql
- Jest, Supertest


# Backend Challenge

## Introduction

Fat Llama relies heavily on our search in order for users to be able to find the items they need from other users. Our search must return a list of items matching a given search term, as well as displaying certain information about the item owners (see example Item Card below).

On the production web & mobile app there are other factors that come into play such as lender rating, response time, categories, time since listing, and more. For this challenge though, we want you to focus only on the above.

## The Challenge

We want you to build a `GET /search` endpoint that will return the most appropriate 20 items given a `searchTerm`, e.g. `/search?searchTerm=camera`. The items returned must contain the owner's information so we can correctly display them in the Fat Llama frontend. You are not required to incorporate any complex fuzzy text matching.

The data returned should be sufficient for the frontend to construct the following item card:
![alt text](https://fat-lama-assets.s3-eu-west-1.amazonaws.com/itemCard.png "Item card")

You are provided with two csvs containing approximately 1000 items and 300 users. It is up you how your API handles these.

When you are finished, write up a short summary of why you made the choices you did in terms of technology and design. This should be no more than 500 words.

## Things to think about:

- Think about points of failure and how your endpoint will perform under load.
- Language/frameworks: Node.js with Typescript is preferable, but if you haven't worked with Typescript, Node.js + Javascript is also acceptable.
- Testing: use whatever tools you prefer to test your code appropriately
- Try to implement appropriate [separation of concerns](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/) & modular code
- Think hard about naming of functions and variables. Your code must be readable
- Code style & file structure is up to you, but make sure it is consistent and easy to understand

## Checklist for Challenge

- [ ] Duplicate this repo (please do not fork it, see [instructions](https://help.github.com/articles/duplicating-a-repository/)). Github/Bitbucket offer free private repos if you don't want to use a public one. Please do not name your repo 'fat llama' or anything similar (we don't want future candidates copying your code).
- [ ] Build API endpoint for Fat Llama search with according to above specifications
- [ ] Ensure all code is sufficiently tested
- [ ] Write brief summary on the approach you took and the tools you used (max 500 words)
- [ ] Include instructions on how to build/ run your solution
- [ ] Send us a link to your new repo.
