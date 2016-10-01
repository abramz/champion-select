import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TabHeader.css';

// components
import View from 'react-flexbox';

function UnstyledTabs({ children }) {
  return (
    <div>
      {
        React.children.map(children, (child) => {
          if (child === null) {
            return null;
          }
        })
      }
    </div>
  );
}

UnstyledTabs.propTypes = {
  selected: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default withStyles(s)(UnstyledTabs);
