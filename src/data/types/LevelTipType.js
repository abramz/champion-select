import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const LevelTipType = new ObjectType({
  name: 'LevelTip',
  fields: {
    label: { type: new ListType(StringType) },
    effect: { type: new ListType(StringType) },
  },
});

export default LevelTipType;
