import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChampionList.scss';
import { images } from '../../config';

// components
import Link from '../../components/Link';

function ChampionList({ champions, version }) {
  return (
    <div className="champion-list">
      {
        champions.map((champion, index) => (
          <div key={index} className="champion">
            <span className="champion-image-wrapper">
              <Link to={`/champion/${champion.key}`}>
                <img className="champion-image" src={`${images.baseUrl}/${version}/img/${champion.image.group}/${champion.image.full}`} alt={champion.name} />
              </Link>
            </span>
            <div className="text-center">
              <Link className="champion-text" to={`/champion/${champion.key}`}>{champion.name}</Link>
            </div>
          </div>
        ))
      }
    </div>
  );
}

ChampionList.propTypes = {
  champions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      full: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
    }),
  })).isRequired,
  version: PropTypes.string.isRequired,
};

export default withStyles(s)(ChampionList);
