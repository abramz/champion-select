import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Champion.css';
import splashes from '../../constants/splashes';

// components
import View from 'react-flexbox';
import CollapsiblePanel from '../../components/CollapsiblePanel';
import TabGroup from '../../components/TabGroup/TabGroup';
import TabHeaders from '../../components/TabHeaders/TabHeaders';
import TabPanels from '../../components/TabPanels/TabPanels';

// containers
import CdnImage from '../../containers/CdnImage';
import ModifiedChampionStats from '../../containers/ModifiedChampionStats';
import TabHeader from '../../containers/TabHeader';
import TabPanel from '../../containers/TabPanel';
import VisibleItemList from '../../containers/VisibleItemList';
import withViewport from '../../containers/withViewport';

export function UnstyledChampion({ champion, items, viewport }, context) {
  context.setTitle(champion.name);

  const mainStyle = {};
  const leftStyle = {
    justifyContent: 'flex-start',
  };
  const rightStyle = {};
  const splashToShow = splashes.find((splash) => splash.key.toLowerCase() === champion.key.toLowerCase());
  const smallSplit = viewport.width / 3;
  const bigSplit = viewport.width - smallSplit;

  if (smallSplit < 200 || bigSplit < 600) {
    mainStyle.flexWrap = 'wrap';
    leftStyle.width = '100%';
    rightStyle.width = '100%';
  } else {
    mainStyle.flexWrap = 'nowrap';
    leftStyle.flex = '1 0 auto';
    rightStyle.flex = '2 0 auto';
    leftStyle.maxWidth = '300px';
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <View column>
          <div className={s.header}>
            <div className={s.splash}>
              <CdnImage
                className={s[`splash${champion.key}`]}
                group="champion"
                image={`splash/${splashToShow.image}`}
                withVersion={false}
                alt={champion.name}
                role="presentation"
              />
            </div>
            <span className={s.title}>
              <h2>{champion.name}</h2>
              <h3>{champion.title}</h3>
            </span>
          </div>
          <View className={s.main} style={mainStyle} row auto>
            <View className={s.left} style={leftStyle} column>
              <CollapsiblePanel header="Champion Stats">
                <ModifiedChampionStats stats={champion.stats} energyType={champion.partype} />
              </CollapsiblePanel>
              <CollapsiblePanel header="Abilities">
                Abilities content
              </CollapsiblePanel>
              <CollapsiblePanel header="Runes">
                Runes content
              </CollapsiblePanel>
              <CollapsiblePanel header="Masteries">
                Masteries content
              </CollapsiblePanel>
            </View>
            <View className={s.right} style={rightStyle}>
              {
                <TabGroup>
                  <TabHeaders>
                    <TabHeader index={0}>Items</TabHeader>
                    <TabHeader index={1}>Runes</TabHeader>
                    <TabHeader index={2}>Masteries</TabHeader>
                  </TabHeaders>
                  <TabPanels>
                    <TabPanel index={0}>
                      Tab 1 content
                    </TabPanel>
                    <TabPanel index={1}>Tab 2 content</TabPanel>
                    <TabPanel index={2}>Tab 3 content</TabPanel>
                  </TabPanels>
                </TabGroup>
              }
            </View>
          </View>
        </View>
      </div>
    </div>
  );
}

UnstyledChampion.propTypes = {
  champion: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    partype: PropTypes.string,
    image: PropTypes.shape({
      group: PropTypes.string,
    }),
    info: PropTypes.shape({
      attack: PropTypes.number,
      defense: PropTypes.number,
      difficulty: PropTypes.number,
      magic: PropTypes.number,
    }),
    stats: PropTypes.shape({
      armor: PropTypes.number,
      armorperlevel: PropTypes.number,
      attackdamage: PropTypes.number,
      attackdamageperlevel: PropTypes.number,
      attackrange: PropTypes.number,
      attackspeedoffset: PropTypes.number,
      attackspeedperlevel: PropTypes.number,
      crit: PropTypes.number,
      critperlevel: PropTypes.number,
      hp: PropTypes.number,
      hpperlevel: PropTypes.number,
      hpregen: PropTypes.number,
      hpregenperlevel: PropTypes.number,
      movespeed: PropTypes.number,
      mp: PropTypes.number,
      mpperlevel: PropTypes.number,
      mpregen: PropTypes.number,
      mpregenperlevel: PropTypes.number,
      spellblock: PropTypes.number,
      spellblockperlevel: PropTypes.number,
    }),
  }).isRequired,
  viewport: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};
UnstyledChampion.contextTypes = { setTitle: PropTypes.func.isRequired };

export const UnstyledChampionWithViewport = withViewport(UnstyledChampion);

export default withStyles(s)(UnstyledChampionWithViewport);
