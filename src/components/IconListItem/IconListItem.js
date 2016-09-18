import React, { PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './IconListItem.css';

// containers
import CdnImage from '../../containers/CdnImage';

// components
import Link from '../Link';

export function UnstyledIconListItem({ item }) {
  const icon = (
    <CdnImage
      className={s.image}
      group={item.group}
      image={item.image}
      alt={item.title}
      role="presentation"
      withVersion={item.withVersion}
    />
  );

  let children;

  if (item.ref) {
    children = createFragment({
      icon: (
        <div className={s.imageWrapper}>
          <Link to={item.ref}>{icon}</Link>
        </div>
      ),
      title: (
        <div>
          <Link className={s.title} to={item.ref}>{item.title}</Link>
        </div>
      ),
    });
  } else {
    children = createFragment({
      icon: <div className={s.imageWrapper}>{icon}</div>,
      title: <div className={s.title}>{item.title}</div>,
    });
  }

  return (
    <div className={s.item}>
      {children}
    </div>
  );
}

UnstyledIconListItem.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ref: PropTypes.string,
    withVersion: PropTypes.bool,
  }),
};

export default withStyles(s)(UnstyledIconListItem);
