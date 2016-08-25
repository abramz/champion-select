import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

// components
import {
  Col,
  Row,
} from 'react-bootstrap';

const title = 'Champion Select';

function Home(props, context) {
  context.setTitle(title);
  return (
    <Row>
      <Col xs={12}>
        <h1>Select your champion, Summoner!</h1>
      </Col>
    </Row>
  );
}

Home.propTypes = {};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
