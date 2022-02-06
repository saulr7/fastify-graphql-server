import { GraphQLID, GraphQLObjectType } from 'graphql';
import { CompanyType, UserType } from './types';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (_, { id }) => ({ id, name: 'ras', age: 1 }),
    },
    company: {
      type: CompanyType,
      args: {},
      resolve: (_, __, { uid }) => ({ id: uid, name: 'Apple', users: [] }),
    },
  },
});

export default query;
