import { PropTypes } from 'react';

/* IconList & IconListItem */
const iconListItem = PropTypes.shape({ // eslint-disable-line import/prefer-default-export
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ref: PropTypes.string,
  withVersion: PropTypes.bool,
});

export const IconListPropTypes = {
  items: PropTypes.arrayOf(iconListItem).isRequired,
};

export const IconListItemPropTypes = {
  item: iconListItem,
};
