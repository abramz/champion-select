import championFilters from '../../../src/reducers/championFilters';
import {
  ADD_CHAMPION_FILTER,
  REMOVE_CHAMPION_FILTER,
} from '../../../src/constants/ActionTypes';

describe('championFilters', () => {
  const initialState = [];

  it('should provide an initial state', () => {
    championFilters(undefined, {}).should.deep.equal(initialState);
  });

  describe('when the filter is not already toggled', () => {
    const state = ['bar', 'baz'];

    it('should handle the ADD_CHAMPION_FILTER action', () => {
      championFilters(state, { type: ADD_CHAMPION_FILTER, tag: 'foo' })
        .should.deep.equal(['bar', 'baz', 'foo']);
    });

    it('should handle the REMOVE_CHAMPION_FILTER action', () => {
      championFilters(state, { type: REMOVE_CHAMPION_FILTER, tag: 'foo' })
        .should.deep.equal(['bar', 'baz']);
    });
  });

  describe('when the filter is already toggled', () => {
    const state = ['foo', 'bar'];

    it('should handle the ADD_CHAMPION_FILTER action', () => {
      championFilters(state, { type: ADD_CHAMPION_FILTER, tag: 'foo' })
        .should.deep.equal(['foo', 'bar']);
    });

    it('should handle the REMOVE_CHAMPION_FILTER action', () => {
      championFilters(state, { type: REMOVE_CHAMPION_FILTER, tag: 'foo' })
        .should.deep.equal(['bar']);
    });
  });
});
