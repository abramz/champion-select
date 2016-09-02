import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChampionList.css';

// components
import View from 'react-flexbox';
import ChampionListItem from '../ChampionListItem';

export function UnstyledChampionList({ champions, version }) {
  const listFlex = {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <View style={listFlex}>
      {
        champions.map((champion, index) => (<ChampionListItem key={index} champion={champion} version={version} />))
      }
    </View>
  );
}

UnstyledChampionList.propTypes = {
  champions: PropTypes.arrayOf(PropTypes.object).isRequired,
  version: PropTypes.string.isRequired,
};

export default withStyles(s)(UnstyledChampionList);
