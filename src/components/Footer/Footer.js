import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

// components
import View from 'react-flexbox';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.root}>
      <View className={s.container} column>
        <div>
          <span className={s.text}>© Andrew Shapro</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/about">About</Link>
          <span className={s.spacer}>·</span>
          <a className={s.link} href="https://github.com/abramz/champion-select">GitHub</a>
        </div>
        <br />
        <div>
        <span className={s.text}>
          Champion Select  isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone
          officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks
          or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
        </span>
        </div>
      </View>
    </div>
  );
}

export default withStyles(s)(Footer);
