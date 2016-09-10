import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import { aboutPageTitle, brandTitle } from '../../constants';

// components
import View from 'react-flexbox';
import Link from '../Link';

export function UnstyledHeader() {
  const style = {
    alignItems: 'center',
  };

  return (
    <div className={s.root}>
      <View className={s.container} row style={style}>
        <Link className={s.brand} to="/">{brandTitle}</Link>
        <Link className={s.link} to="/about">{aboutPageTitle}</Link>
      </View>
    </div>
  );
}

export default withStyles(s)(UnstyledHeader);
