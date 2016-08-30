import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../../src/components/App/App';

describe('App', () => {
  it('renders children correctly', () => {
    const wrapper = shallow(
      <App context={{ insertCss: () => {} }}>
        <div className="child" />
      </App>
    );

    expect(wrapper.contains(<div className="child" />)).to.be.true;
  });
});
