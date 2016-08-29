import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

// components
import View from 'react-flexbox';
import Link from '../Link';

function Header() {
  const style = {
    alignItems: 'center',
  };

  return (
    <div className={s.root}>
      <View className={s.container} row style={style}>
        <Link className={s.brand} to="/">Champion Select</Link>
        <Link className={s.link} to="/about">About</Link>
      </View>
    </div>
  );
}

export default withStyles(s)(Header);
