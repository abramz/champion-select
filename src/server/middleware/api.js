import expressGraphQL from 'express-graphql';
import schema from '../data/schema';

function api() {
  return expressGraphQL(req => ({
    schema,
    graphiql: process.env.NODE_ENV !== 'production',
    rootValue: { request: req },
    pretty: process.env.NODE_ENV !== 'production',
  }));
}

export default api;
