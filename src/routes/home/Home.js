import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import { images } from '../../config';

// components
import {
  Col,
  Row,
  Form,
  FormGroup,
  FormControl,
  Checkbox,
  Well,
} from 'react-bootstrap';
import Link from '../../components/Link';

const title = 'Champion Select';
const filters = ['Assassin', 'Fighter', 'Mage', 'Support', 'Tank', 'Marksman'];
function Home({ data }, context) {
  context.setTitle(title);

  const champions = data.data;
  const version = data.version;

  return (
    <div>
      <Row>
        <Col xs={12}>
          <h3>Welcome, summoner, select your champion.</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={10} mdOffset={1}>
          <Well bsSize="large">
            <Form horizontal>
              <FormGroup controlId="champion-search" bsSize="lg">
                <Col md={8} mdOffset={2}>
                  <FormControl type="text" placeholder="Teemo..." />
                </Col>
              </FormGroup>
              <FormGroup controlId="champion-role-filter" bsSize="lg">
                {
                  filters.map((filter, index) => (
                    <Col key={index} sm={2}>
                      <Checkbox>{filter}</Checkbox>
                    </Col>
                  ))
                }
              </FormGroup>
            </Form>
          </Well>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="champion-list">
            {
              champions.map((champion, index) => (
                <div key={index} className="champion">
                  <span className="champion-image-wrapper">
                    <Link to={`/champion/${champion.key}`}>
                      <img className="champion-image" src={`${images.baseUrl}/${version}/img/${champion.image.group}/${champion.image.full}`} alt={champion.name} />
                    </Link>
                  </span>
                  <div className="text-center">
                    <Link className="champion-text" to={`/champion/${champion.key}`}>{champion.name}</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </Col>
      </Row>
    </div>
  );
}

Home.propTypes = { data: PropTypes.object };
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
