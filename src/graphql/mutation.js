import {
  GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString,
} from 'graphql';
import createUser from '../services/userServices';
import { UserType } from './types';

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, { name, age }, { pubsub }) => createUser({ name, age }, pubsub),
    },
  },
});

export default mutation;
