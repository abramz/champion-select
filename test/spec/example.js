/* eslint-disable react/prop-types */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('example', () => {
  function ChildFixture({ name, value }) {
    return (
      <span>{name}:{' '}{value}</span>
    );
  }

  function setupChildFixture(name, value) {
    return shallow(<ChildFixture name={name} value={value} />);
  }

  function Fixture({ foo, bar }) {
    return (
      <div>
        <ChildFixture name="child one" value={foo} />
        <ChildFixture name="child two" value={bar} />
      </div>
    );
  }

  function setupFixture(foo, bar) {
    return shallow(<Fixture foo={foo} bar={bar} />);
  }

  describe('ChildFixture', () => {
    it('should render a key and value', () => {
      const wrapper = setupChildFixture('foo', 'bar');
      const text = wrapper.find('span').text();
      expect(text).to.match(/^foo: bar$/);
    });
  });

  describe('Fixture', () => {
    it('should render two child fixtures', () => {
      const wrapper = setupFixture('for', 'baz');
      expect(wrapper).to.contain(
        <ChildFixture
          name="child one" value="for"
        />
      );

      expect(wrapper).to.contain(
        <ChildFixture
          name="child two"
          value="baz"
        />
      );
    });
  });
});
