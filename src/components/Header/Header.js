import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';

// components
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import Link from '../Link';

function Header() {
  return (
    <Navbar className={s.root} fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Champion Select</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/about">About</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withStyles(s)(Header);
