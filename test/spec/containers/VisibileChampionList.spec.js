import { expect } from 'chai';
import { mapStateToProps } from '../../../src/containers/VisibleChampionList';
import { champions, items } from '../support/champions';

describe('<VisibleChampionList />', () => {
  describe('mapStateToProps', () => {
    [
      {
        test: 'should return all champions when there are no filters',
        championSearch: '',
        championTags: [],
        expected: items,
      },
      {
        // 'A', 'a'
        test: 'should return all champions that start with the search term',
        championSearch: 'a',
        championTags: [],
        expected: items.slice(0, 2),
      },
      {
        // 'A', 'a', 'B', 'b', 'C', and 'c'
        test: 'should return all champions that have one of the tags',
        championSearch: '',
        championTags: ['a', 'c'],
        expected: items.slice(0, 6),
      },
      {
        test: 'should return no champions when the search does not match anything',
        championSearch: 'z',
        championTags: [],
        expected: [],
      },
      {
        test: 'should return no champions when the filters do not match anything',
        championSearch: '',
        championTags: ['x', 'y', 'z'],
        expected: [],
      },
    ].forEach(({ test, championSearch, championTags, expected }) => {
      it(test, () => {
        const actual = mapStateToProps({ championSearch, championTags }, { champions });

        expect(actual).to.haveOwnProperty('items');
        expect(actual.items).to.deep.equal(expected);
      });
    });
  });
});
