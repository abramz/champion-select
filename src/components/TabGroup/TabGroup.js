import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabGroup.css';

// components
import View from 'react-flexbox';

export function UnstyledTabGroup({ children }) {
  return (
    <div className={s.root}>
      <View column auto>
        {children}
      </View>
    </div>
  );
}

UnstyledTabGroup.propTypes = {
  children: PropTypes.any,
};

export default withStyles(s)(UnstyledTabGroup);
