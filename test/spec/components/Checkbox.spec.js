import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Checkbox from '../../../src/components/Checkbox';

describe('<Checkbox />', () => {
  function setup(checked, className, filter) {
    const actions = {
      onCheckboxChange: sinon.spy(),
    };

    const wrapper = shallow(
      <Checkbox
        className={className}
        checked={checked}
        filter={filter}
        onChange={actions.onCheckboxChange}
      />
    );

    return {
      actions,
      wrapper,
      input: wrapper.find('input'),
      label: wrapper.find('label'),
    };
  }

  it('should render a div with a checkbox and a label', () => {
    const { wrapper, input, label } = setup(false, 'test classes', 'Test Filter');
    expect(wrapper).to.have.className('test');
    expect(wrapper).to.have.className('classes');

    expect(input).to.have.lengthOf(1);
    expect(input).to.have.prop('id', 'checkbox-tag-Test Filter');
    expect(input).to.have.prop('name', 'checkbox-tag-Test Filter');
    expect(input).to.have.prop('checked', false);
    expect(input).to.have.prop('onChange');

    expect(label).to.have.lengthOf(1);
    expect(label).to.have.prop('htmlFor', 'checkbox-tag-Test Filter');
    expect(label).to.have.prop('children', '  Test Filter');
  });

  it('should call the onChange handler the checkbox changes (react event for clicked)', () => {
    const { actions, input } = setup(false, 'test classes', 'Test Filter');
    input.simulate('change');
    expect(actions.onCheckboxChange).to.have.been.calledOnce;
  });
});
