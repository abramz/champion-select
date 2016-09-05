import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import {
  aboutPageTitle,
  homePageTitle,
  copyRightText,
  riotTerms,
  github,
} from '../../constants';

// components
import View from 'react-flexbox';
import Link from '../Link';

export function UnstyledFooter() {
  return (
    <div className={s.root}>
      <View className={s.container} column>
        <div>
          <span className={s.text}>{copyRightText}</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">{homePageTitle}</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/about">{aboutPageTitle}</Link>
          <span className={s.spacer}>·</span>
          <a className={s.link} href={github.link}>{github.text}</a>
        </div>
        <br />
        <div>
          <span className={s.text}>{riotTerms}</span>
        </div>
      </View>
    </div>
  );
}

export default withStyles(s)(UnstyledFooter);
