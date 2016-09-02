import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
  UnstyledChampionList,
  __RewireAPI__ as RewireAPI,
} from '../../../src/components/ChampionList';
import View from 'react-flexbox';
import Fixture from '../support/component.fixture';

describe('ChampionList', () => {
  let wrapper;
  const champions = [
    {
      key: 'key str 0',
      name: 'name str 0',
      image: {
        group: 'group str 0',
        full: 'full0.png',
      },
    },
    {
      key: 'key str 1',
      name: 'name str 1',
      image: {
        group: 'group str 1',
        full: 'full1.png',
      },
    },
  ];
  const version = '1.1.1';

  beforeEach(() => {
    RewireAPI.__Rewire__('ChampionListItem', Fixture);
    wrapper = shallow(<UnstyledChampionList champions={champions} version={version} />);
    expect(wrapper).to.have.exactly(2).descendants(Fixture);
  });

  afterEach(() => {
    RewireAPI.__ResetDependency__('ChampionListItem');
  });

  it('should have a flexbox', () => {
    const viewRef = wrapper.find(View);
    expect(viewRef).to.have.style('flex-wrap', 'wrap');
    expect(viewRef).to.have.style('align-items', 'center');
    expect(viewRef).to.have.style('justify-content', 'space-around');
  });

  it('should render the first Fixture', () => {
    const firstRef = wrapper.children().first();
    expect(firstRef).to.have.prop('champion', champions[0]);
    expect(firstRef).to.have.prop('version', '1.1.1');
  });

  it('should render the second Fixture', () => {
    const secondRef = wrapper.children().last();
    expect(secondRef).to.have.prop('champion', champions[1]);
    expect(secondRef).to.have.prop('version', '1.1.1');
  });
});
