import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChampionListItem.css';
import { images } from '../../config';

// components
import Link from '../../components/Link';

export function UnstyledChampionListItem({ champion, version }) {
  return (
    <div className={s.champion}>
      <div className={s.championImageWrapper}>
        <Link to={`/champion/${champion.key}`}>
          <img
            className={s.championImage}
            src={`${images.baseUrl}/${version}/img/${champion.image.group}/${champion.image.full}`}
            alt={champion.name}
            role="presentation"
          />
        </Link>
      </div>
      <div className={s.textCenter}>
        <Link className={s.championText} to={`/champion/${champion.key}`}>{champion.name}</Link>
      </div>
    </div>
  );
}

UnstyledChampionListItem.propTypes = {
  champion: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      group: PropTypes.string.isRequired,
      full: PropTypes.string.isRequired,
    }),
  }).isRequired,
  version: PropTypes.string.isRequired,
};

export default withStyles(s)(UnstyledChampionListItem);
