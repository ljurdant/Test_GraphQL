import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import {cities} from './data.js'

const typeDefs = gql`

  type City {
    name: String!
    size: Float!
    population: Float!
    mayor: String!
    departement: Int!
  }

  type Query {
    city(name: String!) : City
    departementCities(departement: Int!) : [City]
  }

`;

const resolvers = {
  Query: {
    city(parent, args, context, info) {
      return cities.find(city => city.name === args.name);
    },

    departementCities(parent, args, context, info) {
      return cities.filter(city => city.departement === args.departement);
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',

  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],

});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});