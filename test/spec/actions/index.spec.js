import {
  setChampionSearch,
  addChampionFilter,
  removeChampionFilter,
} from '../../../src/actions';
import {
  SET_CHAMPION_SEARCH,
  ADD_CHAMPION_FILTER,
  REMOVE_CHAMPION_FILTER,
} from '../../../src/constants/ActionTypes';

describe('Actions', () => {
  describe('#setChampionSearch()', () => {
    it('should return the championSearch struct', () => {
      setChampionSearch('foo').should.deep.equal({
        type: SET_CHAMPION_SEARCH,
        term: 'foo',
      });
    });
  });

  describe('#addChampionFilter()', () => {
    it('should return the addChampionFilter struct', () => {
      addChampionFilter('foo').should.deep.equal({
        type: ADD_CHAMPION_FILTER,
        tag: 'foo',
      });
    });
  });

  describe('#removeChampionFilter()', () => {
    it('should return the removeChampionFilter struct', () => {
      removeChampionFilter('foo').should.deep.equal({
        type: REMOVE_CHAMPION_FILTER,
        tag: 'foo',
      });
    });
  });
});
