import {
  setChampionSearch,
  addChampionTag,
  removeChampionTag,
} from '../../../src/actions';
import {
  SET_CHAMPION_SEARCH,
  ADD_CHAMPION_TAG,
  REMOVE_CHAMPION_TAG,
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

  describe('#addChampionTag()', () => {
    it('should return the addChampionTag struct', () => {
      addChampionTag('foo').should.deep.equal({
        type: ADD_CHAMPION_TAG,
        tag: 'foo',
      });
    });
  });

  describe('#removeChampionTag()', () => {
    it('should return the removeChampionTag struct', () => {
      removeChampionTag('foo').should.deep.equal({
        type: REMOVE_CHAMPION_TAG,
        tag: 'foo',
      });
    });
  });
});
