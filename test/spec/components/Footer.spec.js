import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { UnstyledFooter } from '../../../src/components/Footer';
import View from 'react-flexbox';
import Link from '../../../src/components/Link';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UnstyledFooter />);
    expect(wrapper).to.have.exactly(2).descendants(Link);
    expect(wrapper).to.have.exactly(5).descendants('span');
    expect(wrapper).to.have.exactly(1).descendants('a');
  });

  it('should have a flexbox', () => {
    const viewRef = wrapper.find(View);
    expect(viewRef).to.have.prop('column');
  });

  it('should have a link to Home', () => {
    const homeRef = wrapper.find(Link).first();
    expect(homeRef).to.have.prop('to', '/');
    expect(homeRef).to.have.prop('children', 'Home');
  });

  it('should have a link to About', () => {
    const aboutRef = wrapper.find(Link).last();
    expect(aboutRef).to.have.prop('to', '/about');
    expect(aboutRef).to.have.prop('children', 'About');
  });

  it('should have the copyright', () => {
    const copyrightRef = wrapper.find('span').first();
    expect(copyrightRef).to.have.text('© Andrew Shapro');
  });

  it('should have a legal disclaimer', () => {
    const brandRef = wrapper.find('span').last();
    expect(brandRef).to.have.text().match(/^Champion Select isn't endorsed by Riot Games/);
  });

  it('should have a link to GitHub', () => {
    const aRef = wrapper.find('a').first();
    expect(aRef).to.have.prop('href', 'https://github.com/abramz/champion-select');
    expect(aRef).to.have.prop('children', 'GitHub');
  });
});
