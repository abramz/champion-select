import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Header from '../../../src/components/Header';

describe('Header', () => {
  let insertCss;

  function setup() {
    insertCss = sinon.spy();
    const context = { insertCss };

    return shallow(<Header />, { context });
  }

  it('should render', () => {
    const component = setup();
    (() => component.html()).should.not.throw();
    insertCss.should.have.been.called;
  });
});
