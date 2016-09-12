import { expect } from 'chai';
import runtime from '../../../src/reducers/runtime';
import { SET_RUNTIME_VARIABLE } from '../../../src/constants/ActionTypes';

describe('Reducers/#runtime()', () => {
  const initialState = {};

  it('should provide an initial state', () => {
    expect(runtime(undefined, {})).to.deep.equal(initialState);
  });

  const tests = [
    {
      title: 'should add the payload to state',
      state: initialState,
      payload: { name: 'foo', value: 'bar' },
      expected: { foo: 'bar' },
    },
    {
      title: 'should not drop state that was already there',
      state: { a: 'b', c: ['d', 'e', 'f'], g: { h: 'i' } },
      payload: { name: 'foo', value: 'bar' },
      expected: { a: 'b', c: ['d', 'e', 'f'], g: { h: 'i' }, foo: 'bar' },
    },
    {
      title: 'should overwrite old state',
      state: { a: 'b', c: ['d', 'e', 'f'], g: { h: 'i' } },
      payload: { name: 'c', value: 'def' },
      expected: { a: 'b', c: 'def', g: { h: 'i' } },
    },
  ];

  tests.forEach(({ title, state, payload, expected }) => {
    it(title, () => {
      const result = runtime(state, { type: SET_RUNTIME_VARIABLE, payload });
      expect(result).to.deep.equal(expected);
    });
  });
});
