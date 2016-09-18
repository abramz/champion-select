import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './IconList.css';

// components
import View from 'react-flexbox';
import IconListItem from '../IconListItem';

export function UnstyledIconList({ items }) {
  const listFlex = {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <View style={listFlex}>
      {
        items.map((item, index) => (<IconListItem key={index} item={item} />))
      }
    </View>
  );
}

UnstyledIconList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ref: PropTypes.string,
    withVersion: PropTypes.bool,
  })).isRequired,
};

export default withStyles(s)(UnstyledIconList);
