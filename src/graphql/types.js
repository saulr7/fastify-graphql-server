import {
  GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    birthdate: { type: GraphQLString, deprecationReason: 'too old' },
  },
});

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    users: { type: new GraphQLList(UserType) },
  },
});

export { UserType, CompanyType };
