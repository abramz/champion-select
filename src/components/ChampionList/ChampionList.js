import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChampionList.css';
import { images } from '../../config';

// components
import View from 'react-flexbox';
import Link from '../../components/Link';

function ChampionList({ champions, version }) {
  const listFlex = {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <View style={listFlex}>
      {
        champions.map((champion, index) => (
          <div key={index} className={s.champion}>
            <div className={s.championImageWrapper}>
              <Link to={`/champion/${champion.key}`}>
                <img
                  className={s.championImage}
                  src={`${images.baseUrl}/${version}/img/${champion.image.group}/${champion.image.full}`}
                  alt={champion.name}
                />
              </Link>
            </div>
            <div className={s.textCenter}>
              <Link className={s.championText} to={`/champion/${champion.key}`}>{champion.name}</Link>
            </div>
          </div>
        ))
      }
    </View>
  );
}

ChampionList.propTypes = {
  champions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      group: PropTypes.string.isRequired,
      full: PropTypes.string.isRequired,
    }),
  })).isRequired,
  version: PropTypes.string.isRequired,
};

export default withStyles(s)(ChampionList);
