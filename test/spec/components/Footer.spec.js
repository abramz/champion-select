import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Footer from '../../../src/components/Footer';

describe('Footer', () => {
  let insertCss;

  function setup() {
    insertCss = sinon.spy();
    const context = { insertCss };

    return shallow(<Footer />, { context });
  }

  it('should render', () => {
    const component = setup();

    (() => component.html()).should.not.throw();
    insertCss.should.have.been.called;
  });
});
