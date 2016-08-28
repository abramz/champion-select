import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';

// components
import {
  Col,
  Grid,
  Row,
} from 'react-bootstrap';
import Link from '../Link';

function Footer() {
  return (
    <div className="footer">
      <Grid>
        <Row>
          <Col xs={12}>
            <span className="text">© Andrew Shapro</span>
            <span className="spacer">·</span>
            <Link className="link" to="/">Home</Link>
            <span className="spacer">·</span>
            <Link className="link" to="/about">About</Link>
            <span className="spacer">·</span>
            <a className="link" href="https://github.com/abramz/champion-select">GitHub</a>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12}>
            <span className="text">
              Champion Select  isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone
              officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks
              or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
            </span>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default withStyles(s)(Footer);
