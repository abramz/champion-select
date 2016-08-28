import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

// components
import {
  Col,
  Row,
  Form,
  FormGroup,
} from 'react-bootstrap';
import VisibleChampionList from '../../containers/VisibleChampionList';
import ChampionFilter from '../../containers/ChampionFilter';
import ChampionSearch from '../../containers/ChampionSearch';

const title = 'Champion Select';
const filters = ['Assassin', 'Fighter', 'Mage', 'Support', 'Tank', 'Marksman'];
function Home({ data }, context) {
  context.setTitle(title);

  const champions = data.data;
  const version = data.version;

  return (
    <div className="home">
      <Row>
        <Col xs={12}>
          <h3>Welcome, summoner, select your champion.</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <Form horizontal>
            <FormGroup controlId="champion-search" bsSize="lg">
              <Col md={8} mdOffset={2}>
                <ChampionSearch type="text" placeholder="Teemo..." />
              </Col>
            </FormGroup>
            <FormGroup bsClass="champion-role-filter" controlId="champion-role-filter" bsSize="lg">
              {
                filters.map((filter, index) => (
                  <ChampionFilter key={index} filter={filter}>{filter}</ChampionFilter>
                ))
              }
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <VisibleChampionList champions={champions} version={version} />
        </Col>
      </Row>
    </div>
  );
}

Home.propTypes = { data: PropTypes.object };
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
