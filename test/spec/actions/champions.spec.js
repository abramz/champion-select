import { expect } from 'chai';
import {
  setChampionSearch,
  addChampionTag,
  removeChampionTag,
} from '../../../src/actions/champions';
import {
  SET_CHAMPION_SEARCH,
  ADD_CHAMPION_TAG,
  REMOVE_CHAMPION_TAG,
} from '../../../src/constants/ActionTypes';

describe('Actions', () => {
  describe('#setChampionSearch()', () => {
    it('should return the championSearch struct', () => {
      expect(setChampionSearch('foo')).to.deep.equal({
        type: SET_CHAMPION_SEARCH,
        term: 'foo',
      });
    });
  });

  describe('#addChampionTag()', () => {
    it('should return the addChampionTag struct', () => {
      expect(addChampionTag('foo')).to.deep.equal({
        type: ADD_CHAMPION_TAG,
        tag: 'foo',
      });
    });
  });

  describe('#removeChampionTag()', () => {
    it('should return the removeChampionTag struct', () => {
      expect(removeChampionTag('foo')).to.deep.equal({
        type: REMOVE_CHAMPION_TAG,
        tag: 'foo',
      });
    });
  });
});
