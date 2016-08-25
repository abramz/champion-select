import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLFloat as FloatType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const SpellVarsType = new ObjectType({
  name: 'SpellVars',
  fields: {
    coeff: { type: new ListType(FloatType) },
    dyn: { type: new NonNull(StringType) },
    key: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    ranksWith: { type: new NonNull(StringType) },
  },
});

export default SpellVarsType;
