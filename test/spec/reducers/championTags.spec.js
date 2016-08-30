import championTags from '../../../src/reducers/championTags';
import {
  ADD_CHAMPION_TAG,
  REMOVE_CHAMPION_TAG,
} from '../../../src/constants/ActionTypes';

describe('reducers/#championTags()', () => {
  const initialState = [];

  it('should provide an initial state', () => {
    championTags(undefined, {}).should.deep.equal(initialState);
  });

  describe('when the filter is not already toggled', () => {
    const state = ['bar', 'baz'];

    it('should handle the ADD_CHAMPION_TAG action', () => {
      championTags(state, { type: ADD_CHAMPION_TAG, tag: 'foo' })
        .should.deep.equal(['bar', 'baz', 'foo']);
    });

    it('should handle the REMOVE_CHAMPION_TAG action', () => {
      championTags(state, { type: REMOVE_CHAMPION_TAG, tag: 'foo' })
        .should.deep.equal(['bar', 'baz']);
    });
  });

  describe('when the filter is already toggled', () => {
    const state = ['foo', 'bar'];

    it('should handle the ADD_CHAMPION_TAG action', () => {
      championTags(state, { type: ADD_CHAMPION_TAG, tag: 'foo' })
        .should.deep.equal(['foo', 'bar']);
    });

    it('should handle the REMOVE_CHAMPION_TAG action', () => {
      championTags(state, { type: REMOVE_CHAMPION_TAG, tag: 'foo' })
        .should.deep.equal(['bar']);
    });
  });
});
