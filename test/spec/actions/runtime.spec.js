import { expect } from 'chai';
import {
  setRuntimeVariable,
} from '../../../src/actions/runtime';
import { SET_RUNTIME_VARIABLE } from '../../../src/constants/ActionTypes';

describe('Actions', () => {
  describe('#setRuntimeVariable()', () => {
    it('should return the setRuntimeVariable struct', () => {
      expect(setRuntimeVariable('foo', 'bar')).to.deep.equal({
        type: SET_RUNTIME_VARIABLE,
        payload: {
          name: 'foo',
          value: 'bar',
        },
      });
    });
  });
});
