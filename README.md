Test_GraphQL
=============
Objectives
----------
Code a small GraphQL API wth sample city data

Data
----
Sample Data can be found in data.js

Queries
-------
- get city information from city name
- get cities with a given departement number

Usage
-----
1. Run "npm install" to install dependencies
2. Run "npm start to launch server"

Testing
-------
1. Go to the url given after the script is launched
2. try the following queries:
  '''query City($name: String!, $departement: Int!) {
  city(name: $name) {
    name
    size
    population
    mayor
    departement
  }
  departementCities(departement: $departement) {
    name
    size
    population
    mayor
    departement
  }
}'''
