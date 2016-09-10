import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChampionListItem.css';

// containers
import withCdn from '../../containers/withCdn';

// components
import Link from '../Link';

export function UnstyledChampionListItem({ cdnUrl, champion, version }) {
  return (
    <div className={s.champion}>
      <div className={s.championImageWrapper}>
        <Link to={`/champion/${champion.key}`}>
          <img
            className={s.championImage}
            src={`${cdnUrl}/${version}/img/${champion.image.group}/${champion.image.full}`}
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
  cdnUrl: PropTypes.string.isRequired,
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

export const ChampionListItemWithCdn = withCdn(UnstyledChampionListItem);

export default withStyles(s)(ChampionListItemWithCdn);
