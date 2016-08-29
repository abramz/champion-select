import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChampionList.scss';
import { images } from '../../config';

// components
import Link from '../../components/Link';

function makeImageStyle(image, version) {
  // doing this in JS so it can be dynamic
  return {
    height: image.h,
    width: image.w,
    background: `url('${images.baseUrl}/${version}/img/sprite/${image.sprite}') -${image.x}px -${image.y}px no-repeat`,
  };
}

function ChampionList({ champions, version }) {
  return (
    <div className="champion-list">
      {
        champions.map((champion, index) => (
          <div key={index} className="champion">
            <span className="champion-image-wrapper">
              <Link to={`/champion/${champion.key}`}>
                <div style={makeImageStyle(champion.image, version)} alt={champion.name}></div>
              </Link>
            </span>
            <div className="text-center">
              <strong>
                <Link className="champion-text" to={`/champion/${champion.key}`}>{champion.name}</Link>
              </strong>
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
      sprite: PropTypes.string.isRequired,
      h: PropTypes.number.isRequired,
      w: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
  })).isRequired,
  version: PropTypes.string.isRequired,
};

export default withStyles(s)(ChampionList);
