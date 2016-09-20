import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './IconList.css';

// prop types
import { IconListPropTypes } from '../../constants/propTypes';

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

UnstyledIconList.propTypes = IconListPropTypes;

export default withStyles(s)(UnstyledIconList);
