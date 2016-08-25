import {
  GraphQLObjectType as ObjectType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const StatsType = new ObjectType({
  name: 'Stats',
  fields: {
    armor: { type: new NonNull(FloatType) },
    armorperlevel: { type: new NonNull(FloatType) },
    attackdamage: { type: new NonNull(FloatType) },
    attackdamageperlevel: { type: new NonNull(FloatType) },
    attackrange: { type: new NonNull(FloatType) },
    attackspeedoffset: { type: new NonNull(FloatType) },
    attackspeedperlevel: { type: new NonNull(FloatType) },
    crit: { type: new NonNull(FloatType) },
    critperlevel: { type: new NonNull(FloatType) },
    hp: { type: new NonNull(FloatType) },
    hpperlevel: { type: new NonNull(FloatType) },
    hpregen: { type: new NonNull(FloatType) },
    hpregenperlevel: { type: new NonNull(FloatType) },
    movespeed: { type: new NonNull(FloatType) },
    mp: { type: new NonNull(FloatType) },
    mpperlevel: { type: new NonNull(FloatType) },
    mpregen: { type: new NonNull(FloatType) },
    mpregenperlevel: { type: new NonNull(FloatType) },
    spellblock: { type: new NonNull(FloatType) },
    spellblockperlevel: { type: new NonNull(FloatType) },
  },
});

export default StatsType;
