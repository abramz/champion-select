import { expect } from 'chai';
import { mapStateToProps } from '../../../src/containers/VisibleChampionList';
import champions from '../support/champions';

describe('<VisibleChampionList />', () => {
  describe('mapStateToProps', () => {
    const version = '1.2.3';

    function setup(championSearch, championTags) {
      const result = mapStateToProps({ championSearch, championTags }, { champions, version });
      expect(result.version).to.equal(version, 'mapStateTopProps should not clobber the version');
      return result.champions;
    }

    it('should return all champions when there are no filters', () => {
      const result = setup('', []);
      expect(result).to.deep.equal(champions);
    });

    it('should return all champions that start with the search term', () => {
      const result = setup('a', []);
      // 'A' and 'a'
      expect(result).to.deep.equal(champions.slice(0, 2));
    });

    it('should return all champions that have one of the tags', () => {
      // 'A', 'a', 'B', 'b', 'C', and 'c'
      const result = setup('', ['a', 'c']);
      expect(result).to.deep.equal(champions.slice(0, 6));
    });

    it('should return no champions when the search does not match anything', () => {
      const result = setup('z', []);
      expect(result).to.deep.equal([]);
    });

    it('should return no champions when the filters do not match anything', () => {
      const result = setup('', ['x', 'y', 'z']);
      expect(result).to.deep.equal([]);
    });
  });
});
