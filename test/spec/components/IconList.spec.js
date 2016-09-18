import React, { PropTypes } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
  UnstyledIconList,
  __RewireAPI__ as RewireAPI,
} from '../../../src/components/IconList';
import View from 'react-flexbox';
import getFixture from '../support/component.fixture';
import { items } from '../support/champions';

describe('<IconList />', () => {
  let wrapper;
  let Fixture;

  beforeEach(() => {
    Fixture = getFixture();
    Fixture.propTypes = {
      item: PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        group: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        ref: PropTypes.string,
        withVersion: PropTypes.bool,
      }).isRequired,
    };
    RewireAPI.__Rewire__('IconListItem', Fixture);
    wrapper = shallow(<UnstyledIconList items={items} />);
    expect(wrapper).to.have.exactly(items.length).descendants(Fixture);
  });

  afterEach(() => {
    RewireAPI.__ResetDependency__('IconListItem');
  });

  it('should have a flexbox', () => {
    const viewRef = wrapper.find(View);
    expect(viewRef).to.have.style('flex-wrap', 'wrap');
    expect(viewRef).to.have.style('align-items', 'center');
    expect(viewRef).to.have.style('justify-content', 'space-around');
  });

  items.forEach((item, index) => {
    it(`should render the item at index: ${index}`, () => {
      const child = wrapper.childAt(index);
      expect(child).to.have.prop('item', item);
    });
  });
});
