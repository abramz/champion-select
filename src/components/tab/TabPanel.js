import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabPanel.css';

function UnstyledTab({ index, header, children }) {
  return (
    <div className={s.root}>
      <div className={s.header}>
        {header}
      </div>
      <div className={cx(s.body, index === 0 ? s.bodyShow : s.bodyHide)}>
        {children}
      </div>
    </div>
  );
}

UnstyledTab.propTypes = {
  index: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(s)(UnstyledTab);
