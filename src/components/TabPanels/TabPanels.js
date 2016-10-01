import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabPanels.css';

export function UnstyledTabPanels({ children }) {
  return (
    <div className={s.root}>
      {
        React.Children.map(children, (child) => (
          React.cloneElement(child, {
            className: s.panel,
            hiddenClassName: s.panelHidden,
          })
        ))
      }
    </div>
  );
}

UnstyledTabPanels.propTypes = {
  children: PropTypes.any,
};

export default withStyles(s)(UnstyledTabPanels);
