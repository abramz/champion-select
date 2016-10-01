import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabHeaders.css';

// components
import View from 'react-flexbox';

export function UnstyledTabHeaders({ children }) {
  return (
    <div className={s.root}>
      <View row auto>
        {
          React.Children.map(children, (child) => (
            React.cloneElement(child, {
              className: s.header,
              selectedClassName: s.headerSelected,
            })
          ))
        }
      </View>
    </div>
  );
}

UnstyledTabHeaders.propTypes = {
  children: PropTypes.any,
};

export default withStyles(s)(UnstyledTabHeaders);
