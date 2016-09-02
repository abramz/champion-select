import { expect } from 'chai';
import championSearch from '../../../src/reducers/championSearch';
import { SET_CHAMPION_SEARCH } from '../../../src/constants/ActionTypes';

describe('Reducers/#championSearch()', () => {
  const initialState = '';

  it('should provide an initial state', () => {
    expect(championSearch(undefined, {})).to.equal(initialState);
  });

  describe('when the term is already set', () => {
    const state = 'foo';

    it('should replace the old term', () => {
      expect(championSearch(state, { type: SET_CHAMPION_SEARCH, term: 'foo' }))
        .to.equal('foo');
    });
  });
});
