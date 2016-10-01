import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChampionStats.css';

function formatNum(num) {
  return num.toFixed(3).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1');
}

function UnstyledChampionStats({ stats, energyType }) {
  const formattedEnergyType = energyType.replace(/([a-z])([A-Z])/g, '$1 $2');
  return (
    <div>Champion Stats</div>
  );
  // return (
  //   <div>
  //     <div>
  //       Attack Damage {formatNum(stats.attackdamage)}
  //     </div>
  //     <div>
  //       Critical Strike {formatNum(stats.crit)}
  //     </div>
  //     <div>
  //       Armor Penetration {formatNum(stats.armorpenflat)} | {formatNum(stats.armorpenpercent)}%
  //     </div>
  //     <div>
  //       Attack Speed {formatNum(stats.attackspeed)}
  //     </div>
  //     <div>
  //       Attack Range {formatNum(stats.attackrange)}
  //     </div>
  //     <div>
  //       Ability Power {formatNum(stats.magicdamage)}
  //     </div>
  //     <div>
  //       Magic Penetration {formatNum(stats.spellpenflat)} | {formatNum(stats.spellpenpercent)}%
  //     </div>
  //     <div>
  //       Cooldown Reduction {formatNum(stats.cooldownreduction)}%
  //     </div>
  //     <div>
  //       HP {formatNum(stats.hp)}
  //     </div>
  //     <div>
  //       HP Regen {formatNum(stats.hpregen)}
  //     </div>
  //     <div>
  //       {formattedEnergyType} {formatNum(stats.mp)}
  //     </div>
  //     <div>
  //       {formattedEnergyType} Regen {formatNum(stats.mpregen)}
  //     </div>
  //     <div>
  //       Armor {formatNum(stats.armor)}
  //     </div>
  //     <div>
  //       Magic Resist {formatNum(stats.spellblock)}
  //     </div>
  //     <div>
  //       Movement Speed {formatNum(stats.movespeed)}
  //     </div>
  //   </div>
  // );
}

UnstyledChampionStats.propTypes = {
  stats: PropTypes.shape({
    attackdamage: PropTypes.number,
    crit: PropTypes.number,
    attackrange: PropTypes.number,
    attackspeed: PropTypes.number,
    armorpenflat: PropTypes.number,
    armorpenpercent: PropTypes.number,
    magicdamage: PropTypes.number,
    spellpenflat: PropTypes.number,
    spellpenpercent: PropTypes.number,
    cooldownreduction: PropTypes.number,
    hp: PropTypes.number,
    hpregen: PropTypes.number,
    mp: PropTypes.number,
    mpregen: PropTypes.number,
    armor: PropTypes.number,
    spellblock: PropTypes.number,
    movespeed: PropTypes.number,
  }).isRequired,
  energyType: PropTypes.string.isRequired,
};

export default withStyles(s)(UnstyledChampionStats);
