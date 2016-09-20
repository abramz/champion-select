import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
  UnstyledIconListItem,
  __RewireAPI__ as RewireAPI,
} from '../../../src/components/IconListItem';
import getFixture from '../support/component.fixture';
import iconItem from '../support/iconItem';

describe('<IconListItem />', () => {
  let Fixture;

  beforeEach(() => {
    Fixture = getFixture();
    RewireAPI.__Rewire__('CdnImage', Fixture);
    RewireAPI.__Rewire__('Link', Fixture);
  });

  afterEach(() => {
    RewireAPI.__ResetDependency__('CdnImage');
    RewireAPI.__ResetDependency__('Link');
  });

  function checkImg(imgRef) {
    expect(imgRef).to.have.prop('group', 'group');
    expect(imgRef).to.have.prop('image', 'A.png');
    expect(imgRef).to.have.prop('alt', 'Abcd');
    expect(imgRef).to.have.prop('role', 'presentation');
    expect(imgRef).to.have.prop('withVersion', true);
  }

  it('should display the image and title with links if `iconItem.ref` is provided', () => {
    const expectedTo = '/champion/A';
    const wrapper = shallow(<UnstyledIconListItem item={Object.assign({ ref: '/champion/A' }, iconItem)} />);

    expect(wrapper).to.have.exactly(3).descendants('div');
    expect(wrapper).to.have.exactly(3).descendants(Fixture);

    const imgLinkRef = wrapper.find(Fixture).at(0);
    expect(imgLinkRef).to.have.prop('to', expectedTo);

    const imgRef = wrapper.find(Fixture).at(1);
    checkImg(imgRef);

    const titleLinkRef = wrapper.find(Fixture).at(2);
    expect(titleLinkRef).to.have.prop('to', expectedTo);
    expect(titleLinkRef).to.have.prop('children', 'Abcd');
  });

  it('should display the image and title without links if `iconItem.ref` is not provided', () => {
    const wrapper = shallow(<UnstyledIconListItem item={iconItem} />);

    expect(wrapper).to.have.exactly(3).descendants('div');
    expect(wrapper).to.have.exactly(1).descendants(Fixture);

    const imgRef = wrapper.find(Fixture).at(0);
    checkImg(imgRef);

    const textRef = wrapper.find('div').at(2);
    expect(textRef.text()).to.equal('Abcd');
  });
});
