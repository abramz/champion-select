import {
  GraphQLObjectType as ObjectType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BasicDataStatsType = new ObjectType({
  name: 'BasicDataStats',
  fields: {
    FlatArmorMod: { type: new NonNull(FloatType) },
    FlatAttackSpeedMod: { type: new NonNull(FloatType) },
    FlatBlockMod: { type: new NonNull(FloatType) },
    FlatCritChanceMod: { type: new NonNull(FloatType) },
    FlatCritDamageMod: { type: new NonNull(FloatType) },
    FlatEXPBonus: { type: new NonNull(FloatType) },
    FlatEnergyPoolMod: { type: new NonNull(FloatType) },
    FlatEnergyRegenMod: { type: new NonNull(FloatType) },
    FlatHPPoolMod: { type: new NonNull(FloatType) },
    FlatHPRegenMod: { type: new NonNull(FloatType) },
    FlatMPPoolMod: { type: new NonNull(FloatType) },
    FlatMPRegenMod: { type: new NonNull(FloatType) },
    FlatMagicDamageMod: { type: new NonNull(FloatType) },
    FlatMovementSpeedMod: { type: new NonNull(FloatType) },
    FlatPhysicalDamageMod: { type: new NonNull(FloatType) },
    FlatSpellBlockMod: { type: new NonNull(FloatType) },
    PercentArmorMod: { type: new NonNull(FloatType) },
    PercentAttackSpeedMod: { type: new NonNull(FloatType) },
    PercentBlockMod: { type: new NonNull(FloatType) },
    PercentCritChanceMod: { type: new NonNull(FloatType) },
    PercentCritDamageMod: { type: new NonNull(FloatType) },
    PercentDodgeMod: { type: new NonNull(FloatType) },
    PercentEXPBonus: { type: new NonNull(FloatType) },
    PercentHPPoolMod: { type: new NonNull(FloatType) },
    PercentHPRegenMod: { type: new NonNull(FloatType) },
    PercentLifeStealMod: { type: new NonNull(FloatType) },
    PercentMPPoolMod: { type: new NonNull(FloatType) },
    PercentMPRegenMod: { type: new NonNull(FloatType) },
    PercentMagicDamageMod: { type: new NonNull(FloatType) },
    PercentMovementSpeedMod: { type: new NonNull(FloatType) },
    PercentPhysicalDamageMod: { type: new NonNull(FloatType) },
    PercentSpellBlockMod: { type: new NonNull(FloatType) },
    PercentSpellVampMod: { type: new NonNull(FloatType) },
    rFlatArmorModPerLevel: { type: new NonNull(FloatType) },
    rFlatArmorPenetrationMod: { type: new NonNull(FloatType) },
    rFlatArmorPenetrationModPerLevel: { type: new NonNull(FloatType) },
    rFlatCritChanceModPerLevel: { type: new NonNull(FloatType) },
    rFlatCritDamageModPerLevel: { type: new NonNull(FloatType) },
    rFlatDodgeMod: { type: new NonNull(FloatType) },
    rFlatDodgeModPerLevel: { type: new NonNull(FloatType) },
    rFlatEnergyModPerLevel: { type: new NonNull(FloatType) },
    rFlatEnergyRegenModPerLevel: { type: new NonNull(FloatType) },
    rFlatGoldPer10Mod: { type: new NonNull(FloatType) },
    rFlatHPModPerLevel: { type: new NonNull(FloatType) },
    rFlatHPRegenModPerLevel: { type: new NonNull(FloatType) },
    rFlatMPModPerLevel: { type: new NonNull(FloatType) },
    rFlatMPRegenModPerLevel: { type: new NonNull(FloatType) },
    rFlatMagicDamageModPerLevel: { type: new NonNull(FloatType) },
    rFlatMagicPenetrationMod: { type: new NonNull(FloatType) },
    rFlatMagicPenetrationModPerLevel: { type: new NonNull(FloatType) },
    rFlatMovementSpeedModPerLevel: { type: new NonNull(FloatType) },
    rFlatPhysicalDamageModPerLevel: { type: new NonNull(FloatType) },
    rFlatSpellBlockModPerLevel: { type: new NonNull(FloatType) },
    rFlatTimeDeadMod: { type: new NonNull(FloatType) },
    rFlatTimeDeadModPerLevel: { type: new NonNull(FloatType) },
    rPercentArmorPenetrationMod: { type: new NonNull(FloatType) },
    rPercentArmorPenetrationModPerLevel: { type: new NonNull(FloatType) },
    rPercentAttackSpeedModPerLevel: { type: new NonNull(FloatType) },
    rPercentCooldownMod: { type: new NonNull(FloatType) },
    rPercentCooldownModPerLevel: { type: new NonNull(FloatType) },
    rPercentMagicPenetrationMod: { type: new NonNull(FloatType) },
    rPercentMagicPenetrationModPerLevel: { type: new NonNull(FloatType) },
    rPercentMovementSpeedModPerLevel: { type: new NonNull(FloatType) },
    rPercentTimeDeadMod: { type: new NonNull(FloatType) },
    rPercentTimeDeadModPerLevel: { type: new NonNull(FloatType) },
  },
});

export default BasicDataStatsType;
