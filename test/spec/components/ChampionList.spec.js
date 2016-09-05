import React, { PropTypes } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
  UnstyledChampionList,
  __RewireAPI__ as RewireAPI,
} from '../../../src/components/ChampionList';
import View from 'react-flexbox';
import Fixture from '../support/component.fixture';
import champions from '../support/champions';

describe('<ChampionList />', () => {
  let wrapper;
  const version = '1.1.1';

  beforeEach(() => {
    Fixture.propTypes = {
      champion: PropTypes.object.isRequired,
      version: PropTypes.string.isRequired,
    };
    RewireAPI.__Rewire__('ChampionListItem', Fixture);
    wrapper = shallow(<UnstyledChampionList champions={champions} version={version} />);
    expect(wrapper).to.have.exactly(champions.length).descendants(Fixture);
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

  champions.forEach((champion, index) => {
    it(`should render the champion at index: ${index}`, () => {
      const child = wrapper.childAt(index);
      expect(child).to.have.prop('version', version);
      expect(child).to.have.prop('champion', champion);
    });
  });
});
