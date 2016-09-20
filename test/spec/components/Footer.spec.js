import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { UnstyledFooter, __RewireAPI__ as RewireAPI } from '../../../src/components/Footer';
import View from 'react-flexbox';
import Link from '../../../src/components/Link';
import {
  aboutPageTitle,
  homePageTitle,
  copyRightText,
  riotTerms,
  github,
} from '../support/constants';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    RewireAPI.__Rewire__('aboutPageTitle', aboutPageTitle);
    RewireAPI.__Rewire__('homePageTitle', homePageTitle);
    RewireAPI.__Rewire__('copyRightText', copyRightText);
    RewireAPI.__Rewire__('riotTerms', riotTerms);
    RewireAPI.__Rewire__('github', github);

    wrapper = shallow(<UnstyledFooter />);

    expect(wrapper).to.have.exactly(3).descendants(Link);
    expect(wrapper).to.have.exactly(5).descendants('span');
  });

  afterEach(() => {
    RewireAPI.__ResetDependency__('aboutPageTitle');
    RewireAPI.__ResetDependency__('homePageTitle');
    RewireAPI.__ResetDependency__('copyRightText');
    RewireAPI.__ResetDependency__('riotTerms');
    RewireAPI.__ResetDependency__('github');
  });

  it('should have a flexbox', () => {
    const viewRef = wrapper.find(View);
    expect(viewRef).to.have.prop('column');
  });

  it('should have a link to Home', () => {
    const homeRef = wrapper.find(Link).at(0);
    expect(homeRef).to.have.prop('to', '/');
    expect(homeRef).to.have.prop('children', homePageTitle);
  });

  it('should have a link to About', () => {
    const aboutRef = wrapper.find(Link).at(1);
    expect(aboutRef).to.have.prop('to', '/about');
    expect(aboutRef).to.have.prop('children', aboutPageTitle);
  });

  it('should have the copyright', () => {
    const copyrightRef = wrapper.find('span').first();
    expect(copyrightRef).to.have.text(copyRightText);
  });

  it('should have a legal disclaimer', () => {
    const brandRef = wrapper.find('span').last();
    expect(brandRef).to.have.text().equal(riotTerms);
  });

  it('should have a link to GitHub', () => {
    const githubRef = wrapper.find(Link).at(2);
    expect(githubRef).to.have.prop('to', github.link);
    expect(githubRef).to.have.prop('children', github.text);
  });
});
