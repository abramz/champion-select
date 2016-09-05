import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { UnstyledHeader, __RewireAPI__ as RewireAPI } from '../../../src/components/Header';
import View from 'react-flexbox';
import Link from '../../../src/components/Link';
import { aboutPageTitle, brandTitle } from '../support/constants';

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    RewireAPI.__Rewire__('aboutPageTitle', aboutPageTitle);
    RewireAPI.__Rewire__('brandTitle', brandTitle);

    wrapper = shallow(<UnstyledHeader />);

    expect(wrapper).to.have.exactly(2).descendants(Link);
  });

  afterEach(() => {
    RewireAPI.__ResetDependency__('aboutPageTitle');
    RewireAPI.__ResetDependency__('brandTitle');
  });

  it('should have a flexbox', () => {
    const viewRef = wrapper.find(View);
    expect(viewRef).to.have.prop('row');
    expect(viewRef).to.have.style('align-items', 'center');
  });

  it('should have the brand', () => {
    const brandRef = wrapper.find(Link).first();
    expect(brandRef).to.have.prop('to', '/');
    expect(brandRef).to.have.prop('children', brandTitle);
  });

  it('should have a link to the About page', () => {
    const aboutRef = wrapper.find(Link).last();
    expect(aboutRef).to.have.prop('to', '/about');
    expect(aboutRef).to.have.prop('children', aboutPageTitle);
  });
});
