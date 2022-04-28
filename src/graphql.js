var { buildSchema } = require("graphql");
var { graphqlHTTP } = require("express-graphql");
var { searchCity, addCity } = require("./city");
var schema = buildSchema(`
type cityloc {
    lat: Float
    lng: Float
}
type Query {
    city(name: String!) : cityloc
}
input citycord{
  lat: Float
  lng: Float
}
input cityInfo{
 name: String!
 location: citycord!
}
type Mutation {
  createcity(input: cityInfo): cityloc
}
`);

var root = {
  city: ({ name }) => {
    return searchCity(name);
  },
  createcity: ({ input }) => {
    return addCity(input);
  },
};

const graph = graphqlHTTP({ schema: schema, rootValue: root, graphiql: true });

module.exports = { graph };
