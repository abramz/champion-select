import { expect } from 'chai';
import sinon from 'sinon';
import { SET_CHAMPION_SEARCH } from '../../../src/constants/ActionTypes';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../../src/containers/ChampionSearch';

describe('<ChampionSearch />', () => {
  const allTheTerms = ['a', 'bcd', 'EfG', 'H-J_k', 'LMNop', 'qR5', 't.u.v', 'VV', 'x', 'Y', 'so serious?'];

  describe('mapStateToProps', () => {
    const className = 'test class names';
    const placeholder = 'test placeholder';
    const type = 'text';

    function setup(championSearch) {
      const result = mapStateToProps({ championSearch }, { className, placeholder, type });
      expect(result.className).to.equal(className, 'mapStateTopProps should not clobber the className');
      expect(result.placeholder).to.equal(placeholder, 'mapStateTopProps should not clobber the placeholder');
      expect(result.type).to.equal(type, 'mapStateTopProps should not clobber the type');
      expect(result.autoFocus).to.equal(true, 'mapStateTopProps should always be true');
      return result.value;
    }

    allTheTerms.forEach((term) => {
      it(`should always set the value to ${term}`, () => {
        expect(setup(term)).to.equal(term);
      });
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatchSpy;

    beforeEach(() => {
      dispatchSpy = sinon.spy();
    });

    describe('#onChange()', () => {
      allTheTerms.forEach((term) => {
        it(`should dispatch the SET_CHAMPION_SEARCH action with ${term}`, () => {
          const { onChange } = mapDispatchToProps(dispatchSpy);
          onChange({ target: { value: term } });

          expect(dispatchSpy).to.have.been.calledWithExactly({ type: SET_CHAMPION_SEARCH, term });
        });
      });
    });
  });
});
