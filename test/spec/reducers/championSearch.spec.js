import championSearch from '../../../src/reducers/championSearch';
import { SET_CHAMPION_SEARCH } from '../../../src/constants/ActionTypes';

describe('reduceres/#championSearch()', () => {
  const initialState = '';

  it('should provide an initial state', () => {
    championSearch(undefined, {}).should.equal(initialState);
  });

  describe('when the term is already set', () => {
    const state = 'foo';

    it('should replace the old term', () => {
      championSearch(state, { type: SET_CHAMPION_SEARCH, term: 'foo' })
        .should.equal('foo');
    });
  });
});
